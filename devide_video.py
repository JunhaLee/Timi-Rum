import cv2
import time

# video 파일 경로 입력하기
cap = cv2.VideoCapture('video.avi')
success, image = cap.read()

count = 1
success = True

while True:
    success, image = cap.read()

    if (success is True) :
        # 저장경로 입력하기
        cv2.imwrite("C:/hello/pict%d.jpg" % count, image)
        print("saved image %d.jpg" % count)
        if cv2.waitKey(10) == 27 :
            break
        count += 1

    elif (success is False) :
        break

# When everything done, release the capture
cap.release()