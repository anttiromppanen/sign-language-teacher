# Sign Language Teacher

![GitHub last commit](https://img.shields.io/github/last-commit/anttiromppanen/fm-personal-finance?logo=github)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/anttiromppanen/fm-personal-finance)

Web application using custom trained MediaPipe Gesture Recognizer to detect American Sign Language (ASL) alphabets via webcam, or other on-device camera. Camera feed and the gesture calculations are done in user's browser, which makes it safe to use from user's perspective. Requires camera access allowed for the training tool to work.

## Usage
Consists on image carousel of the ASL alphabet on /alphabet and the main ASL training tool on /training.

## Current features
- Image carousel of the American Sign Language (ASL) alphabet
- Live training tool via camera

## Tech stack
### General
- React, Next.js, Nodev21.6.0, Typescript, React-webcam

### Gesture detection
- MediaPipe, Tensorflow

### Linting
- Eslint, Prettier
