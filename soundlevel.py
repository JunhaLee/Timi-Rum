import sounddevice as sd
from numpy import linalg as LA
import numpy as np
import math
import socket
import time

data=b'1'
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
duration = 10  # seconds
noise_occur = 0
cli = ("127.0.0.1",8000)

while True:
    def print_sound(indata, outdata, frames, time, status):
        volume_norm = np.linalg.norm(indata)*10
        if volume_norm > 80:
            noise_occur = 1
            print(volume_norm)
            print("sound detect!!")
            client_socket.sendto(data, cli)
        else:
            print("not detect...")
            noise_occur = 0
    
    with sd.Stream(callback=print_sound):
        sd.sleep(duration * 100)
