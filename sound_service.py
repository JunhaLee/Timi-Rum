# -*- coding: utf-8 -*-
"""
Created on Fri Jan 22 15:59:25 2021

@author: database
"""

import speech_recognition as sr
import pyaudio
import codecs
import sys
import pygame

# 그냥 오디오 파일을 넣을 때
# AUDIO_FILE = "hello.wav"
#
# # audio file을 audio source로 사용합니다
# r = sr.Recognizer()
# with sr.AudioFile(AUDIO_FILE) as source:
#     audio = r.record(source)  # 전체 audio file 읽기

# microphone에서 auido source를 생성합니다
pygame.mixer.init()
sound = pygame.mixer.Sound("fall_check.wav")
r = sr.Recognizer()
with sr.Microphone() as source:
    print("Say something!")
    sound.play()
    audio = r.listen(source)

# 구글 웹 음성 API로 인식하기 (하루에 제한 50회)
try:
    text = r.recognize_google(audio, language='ko')
    print(text)
    if (text == '응' or text == '그래' or text == '어' or text == '네'):
        print(text + '<-')
    elif (text == '아니' or text == '아니오' or text == '아냐' or text == '안돼'):
        print(text + '<-')
except sr.UnknownValueError:
    print("Google Speech Recognition could not understand audio")
except sr.RequestError as e:
    print("Could not request results from Google Speech Recognition service; {0}".format(e))
