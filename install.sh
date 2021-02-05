#!/usr/bin/bash
pkg update && pkg upgrade
pkg install -y nodejs
pkg install -y libwebp
pkg install -y ffmpeg
pkg install -y wget
pkg install -y tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
