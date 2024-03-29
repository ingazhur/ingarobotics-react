### Segment Any PCB [in progress]
This project is my exploration of Meta's recent [Segment Anything Model](https://segment-anything.com/), which surprisingly, isolated very unique electrical components. I wanted to build a system that would automatically compare a breadboard prototype to a reference circuit design to spot any bugs in assembly. Work in progress.
tags: software,Python,computer vision,personal projects,ongoing projects,all projects
img: SAM.png
### EMG wristband [in progress]
I was curious to explore how we can utilize real-time processing of EMG (electromyography = measuring muscle response and electrical activity) signals from the wrist and translate captured features into controls. Potential application could be replacing remote control of an electric skateboard or playing musical instruments. This project won Jacobs Innovation Spark grant for Spring 2023.
tags: hardware,neurotech,firmware,C/C++,ESP32,ongoing projects,all projects
img: EMG.jpg
### MIT Reality Hack 2023
Team submission to a 3-day VR/AR hackathon at MIT as a part of the hardware track. We designed our own controller connecting to a Oculus headset via bluetooth. We wanted to make climbing the stairs more fun by incorporating hardware feedback (LEDs and vibration motors activated by a step count) and motivating videos embedded into the VR passthrough experience. I designed the step tracking system based on IMU sensor and barometer, plus firmware integration. This project won the "Hardware: Interfacing with the Human Body" track. 
[(Link to a Devpost for more details)](https://devpost.com/software/arcade-steps)
tags: featured,hardware,VR/AR,firmware,C/C++,ESP32,hackathon projects,all projects
img: arcade-steps.png
### Eye-tracking system
A full-stack neurotechnology project involving both hardware and firmware development components. The eye-tracking system is based on [electrooculography (EOG)](https://en.wikipedia.org/wiki/Electrooculography) technique (not cameras, as compared to the standard in AR/VR applications), and allows basic control of a [Chrome dinosaur game](https://trex-runner.com/) with blinks. On the GIF, electrodes are attached to the area above and below my eye that measures voltage difference between the two sites. That signal is later filtered and amplifier through an analog front-end PCB that later connects to a laptop for visualization.
[Github](https://github.com/neurotech-berkeley-devices/eog-eye-tracking)
tags: featured,neurotech,hardware,software,firmware,Python,C/C++,ongoing projects,all projects
img: dino-game.gif
### Delivery robot
A remote-controlled robot with object-grasping capabilities built during a week-long hackathon. The goal of the competition was to build a free-form robot fitting certain size parameters to score as many points as possible by grabbing/transporting objects to a certain area, building a tower, completing side challenges, etc. I developed all the firmware for both the robot and the remote control required to drive the robot and control the claw.
tags: featured,firmware,C/C++,Arduino,all projects
img: robot1.gif
### EOG analog front end PCB (V1)
A 4-layer printed circuit board dedicated to collecting EOG signals for eye tracking. The PCB features two identical channels (for capturing vertical and horizontal eye movements). Each channel has an instrumentation amplifier, a high pass filter (0.4Hz cutoff), a twin-T notch filter for eliminating the 60Hz noise, Sallen-Key low pass filter (48Hz cutoff), and another amplification stage. All circuit blocks are intended to capture the EOG signal, so every setting was selected to accomodate for the frequency range and the typical amplitude of the signal. The input to the board are power + five electrodes (2 per channel, and one reference). The output are two analog signals that could be sampled with a 5V-compatible microcontroller.
tags: neurotech,hardware,all projects
img: eog_1st_gen.jpg
### SIXT33N on Mars
SP21 TI Design contest submission. Apart from building a basic voice-controlled car (standard semester-long project in EECS16B), I expanded its features to include a camera sitting on a servo motor that is controlled through a web server runnning on a Raspberry Pi. Inspired by a recent Mars rover landing back then, I designed a theme for my project according to it. The web server acted as a mission control center that displayed a real-time camera stream, temperature data, and allowed the remote control of the camera. 
This hack was built less than 24 hours before the submission deadline :P 
I got a 1st place. Here is the [web app and demo](https://sixt33ntomars.web.app/).
tags: class projects,firmware,software,Python,Raspberry Pi,all projects
img: sixteen.jpg
### Robot tracker
A concept of a robotics olympiad that I designed as a part of advanced robotics division in MSHP (Moscow School of Programmers) while in high school. The olympiad itself are for kids making Lego robots that need to follow the course map and receive the commands by accessing a web server telling them whether it's safe to move forward (this is where my Qt application comes in). The image below is a proof-of-concept of the command panel that I designed to be used by the operators. A simple web camera is secured directly above the map. I performed a real-time video processing with OpenCV (C++) that detected robots (pure computer vision based on HSV thresholding) and determined whether any of them are on a collision course.
tags: personal projects,software,C/C++,computer vision,all projects
img: robotics-olympiad.png
### Build your own world (BYOW)
An open-ended game development project as a part of [CS61B (Data Structures)](https://sp21.datastructur.es/materials/proj/proj3/proj3) course. This project is in the theme of then-popular Among Us game. It allows you to select from a range of avatars and navigate a randomly-generated world. I used an A* and Kruskal's MST algorithm to generate valid hallways and rooms. As an additional features, there are vents that teleport an avatar to a random location within the world and an option where the light source is only turned on in the square around the avatar.
(Learn more)
tags: class projects,software,Java,all projects
img: byow.png
### ingarobotics.com
This website was build from scratch by me using React. This is the third time I am redesigning my personal website - I tried HTML templates and [Hugo](https://gohugo.io/) in the past, but I didn't like being constrained by the styles and format that these methods have provided me. Plus, I wanted to do some coding during the winter break and learn React at last.
tags: personal projects,ongoing projects,software,React,all projects
img: website.png
### CanSat 2016
A year-long team project as a part of the [CanSat competition](https://cansatcompetition.com/) building an atmospheric probe. By the competition requirements, we successfully launched a probe to the height of over a mile, transmitted and received telemetry (pressure, temperature sensor data), and deployed the parachute. As an additional challenge, we added a CO2 and O2 sensors and a mechanism for spreading mustard seeds upon landing (in the form of a 3D-printed compartment activated by a spring). I designed and etched all the custom PCBs from scratch on board and was responsible for the electronics in general.
tags: hardware,team projects,all projects
img: cansat2016.jpg
### CanSat 2017
A year-long team project as a part of the [CanSat competition](https://cansatcompetition.com/) building an atmospheric probe. By the competition requirements, we successfully launched a probe to the height of over a mile, transmitted and received telemetry (pressure, temperature, IMU sensor data), and deployed the parachute. I designed a soil-resistance measuring module from scratch and designed an algorithm for measuring the resistance with digital potentiometer/multiplexer and wrote a firmware (in C) for it on the main controller. I also built the electronics behind the parachute deployment system and the firmware for luminosity sensors that track the probe's position in relation to the light source. We placed 1st nationally among 70 other teams in the division. 
tags: hardware,firmware,C/C++,team projects,all projects
img: cansat2017.jpg
### CanSat 2018
A year-long team project as a part of the [CanSat competition](https://cansatcompetition.com/) building an atmospheric probe. 1-kg full of awesome hardware. By the competition requirements, we successfully launched a probe to the height of over a mile, transmitted and received telemetry (pressure, temperature, IMU sensor data), and deployed the parachute. 
I built the firmware and electronics behind the custom spectrometer module to interact with a servo motor and a camera using Raspberry Pi. I also built the electronics behind the parachute deployment system. We placed 2nd nationally among other teams in the heavy-weight division. 
tags: hardware,firmware,team projects,Python,Raspberry Pi,all projects
img: cansat2018.jpg
### NFC contact card:
A custom-made contact PCB card that redirects to my LinkedIn page when tapping on a phone. The card has an NFC chip and an LED that lights up upon contact.
(See demo)
tags: personal projects,hardware,all projects
img: contact-card.jpg
### Cal Hacks 8.0 badge
An interactive conference PCB badge designed specifically for [Cal Hacks hackathon](https://www.calhacks.io/). This is a large-scale project (order of ~500 boards) where the bare boards were distributed at a soldering workshop and assembled by the Cal Hacks participants. I designed the PCBs and organized a full-day soldering workshop attended by hundreds hackers.
(Learn more)
tags: hardware,personal projects,firmware,C/C++,all projects
img: badge.gif
### CopterHack
Autonomous drone assembled and programmed in a weekend during a [CopterHack](https://coex.tech/copterhack2022) hackathon.
tags: hackathon projects,computer vision,Python,Raspberry Pi,all projects
img: copter.jpg
### Raspberry Pi hat
An add-on module for Raspberry Pi to support a system for autonomous testing of multiple boards.
tags: hardware,Raspberry Pi,Python,all projects
img: hat.jpg
### Line-following robot
Line-following robot equipped with optical and sonic sensors capable of obstacle avoidance.
tags: hackathon projects,firmware,Arduino,C/C++,all projects
img: robot2.jpg
### Remote Control
A radio-equipped remote control for a robot with a custom-designed PCB. My first experience using professional PCB fabrication and laser cutting services. A piece of art.
tags: personal projects,hardware,Arduino,C/C++,all projects
img: remote.jpg
### Wall-climbing robot
Final project for an engineering design course I took my senior year of high school. The carcass was designed by me, and it was my first experient 3D modeling and printing.
tags: class projects,hardware,3D modeling,Arduino,C/C++,all projects
img: wall-climber.jpg