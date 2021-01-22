import cv2
import numpy as np
import argparse
import time
import sqlite3
import math
import socket
import sounddevice as sd
from numpy import linalg as LA
import threading
from threading import Thread, Lock
from multiprocessing import Process

duration = 10  # seconds
#c.execute("SELECT * FROM result")
#rows = c.fetchall()
#for row in rows:
#    print(row)
sound_val = 0
lock = Lock()
# Load yolo
def load_yolo():
    net = cv2.dnn.readNet("/home/swedu/jj/yolov3_final.weights", "/home/swedu/jj/yolov3.cfg")
    classes = []
    with open("/home/swedu/jj/obj.names", "r") as f:
        classes = [line.strip() for line in f.readlines()]
    layers_names = net.getLayerNames()
    output_layers = [layers_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
    colors = np.random.uniform(0, 255, size=(len(classes), 3))
    return net, classes, colors, output_layers


def load_image(img_path):
    # image loading
    img = cv2.imread(img_path)
    img = cv2.resize(img, None, fx=0.4, fy=0.4)
    height, width, channels = img.shape
    return img, height, width, channels


def start_webcam():
    cap = cv2.VideoCapture(0)
    return cap


def display_blob(blob):
    '''
        Three images each for RED, GREEN, BLUE channel
    '''
    for b in blob:
        for n, imgb in enumerate(b):
            cv2.imshow(str(n), imgb)


def detect_objects(img, net, outputLayers):
    blob = cv2.dnn.blobFromImage(img, scalefactor=0.00392, size=(320, 320), mean=(0, 0, 0), swapRB=True, crop=False)
    net.setInput(blob)
    outputs = net.forward(outputLayers)
    return blob, outputs


def get_box_dimensions(outputs, height, width):
    boxes = []
    confs = []
    class_ids = []
    for output in outputs:
        for detect in output:
            scores = detect[5:]
            class_id = np.argmax(scores)
            conf = scores[class_id]
            if conf > 0.3:
                center_x = int(detect[0] * width)
                center_y = int(detect[1] * height)
                w = int(detect[2] * width)
                h = int(detect[3] * height)
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)
                boxes.append([x, y, w, h])
                confs.append(float(conf))
                class_ids.append(class_id)
    return boxes, confs, class_ids


def draw_labels(boxes, confs, colors, class_ids, classes, img):
    conn = sqlite3.connect('/home/swedu/django/myproject/db.sqlite3')
    c = conn.cursor()
    indexes = cv2.dnn.NMSBoxes(boxes, confs, 0.5, 0.4)
    font = cv2.FONT_HERSHEY_PLAIN
    for i in range(len(boxes)):
        if i in indexes :
            x, y, w, h = boxes[i]
            label = str(classes[class_ids[i]])
            color = colors[class_ids[i]]
            print(class_ids[i])
            print(sound_val)
            if class_ids[i] == 1 and sound_val == 1:
                c.execute("update deeplearningResult set result = 1")
                conn.commit()
            else:
                c.execute("update deeplearningResult set result = 0")
                conn.commit()
            cv2.rectangle(img, (x, y), (x + w, y + h), color, 2)
            cv2.putText(img, label, (x, y - 5), font, 1, color, 1)
    cv2.imshow("Image", img)


def image_detect(img_path):
    model, classes, colors, output_layers = load_yolo()
    image, height, width, channels = load_image(img_path)
    blob, outputs = detect_objects(image, model, output_layers)
    boxes, confs, class_ids = get_box_dimensions(outputs, height, width)
    draw_labels(boxes, confs, colors, class_ids, classes, image)
    while True:
        key = cv2.waitKey(1)
        if key == 27:
            break


def webcam_detect():
    model, classes, colors, output_layers = load_yolo()
    cap = start_webcam()
    while True:
        _, frame = cap.read()
        height, width, channels = frame.shape
        blob, outputs = detect_objects(frame, model, output_layers)
        boxes, confs, class_ids = get_box_dimensions(outputs, height, width)
        draw_labels(boxes, confs, colors, class_ids, classes, frame)
        key = cv2.waitKey(1)
        if key == 27:
            break
    cap.release()


def start_video():
    video_path = "/home/swedu/jj/2.mp4"
    model, classes, colors, output_layers = load_yolo()
    cap = cv2.VideoCapture(video_path)
    while True:
        _, frame = cap.read()
        height, width, channels = frame.shape
        blob, outputs = detect_objects(frame, model, output_layers)
        boxes, confs, class_ids = get_box_dimensions(outputs, height, width)
        draw_labels(boxes, confs, colors, class_ids, classes, frame)
        key = cv2.waitKey(1)
        if key == 27 :
            break
    cap.release()

def sound():
    global sound_val
    while True:
        def audio_callback(indata, frames, time, status) :
            global sound_val
            volume_norm = np.linalg.norm(indata) * 10
            if int(volume_norm) > 80:
                #print(int(volume_norm))
                print("Detect!")
                lock.acquire() 
                sound_val = 1
                lock.release()
                #print(sound_val)
            else: 
                lock.acquire()
                sound_val = 1
                lock.release()
                #print(int(volume_norm))
                #print("Not yet...")

        stream = sd.InputStream(callback=audio_callback)
        with stream :
            sd.sleep(duration * 10000)

        






#if __name__ == '__main__':
#    args = input("input(webcam, video, image) : ")

#    if args == "webcam":
#        print('---- Starting Web Cam object detection ----')
#webcam_detect()
#    if args == "video":

def makeThreads():
    global sound_val
    t1=threading.Thread(target = sound)
    t2=threading.Thread(target = start_video)

    t1.start()
    t2.start()

    t1.join()
    t2.join()

#   if args == "image":
#        image_path = "fall_jooona8167.jpg"
#        image_detect(image_path)

makeThreads()

c.close()
cv2.destroyAllWindows()