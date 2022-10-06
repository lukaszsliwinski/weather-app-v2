# Weather app 2.0

## About
Weather application for checking current conditions and forecast in chosen city. Weather data are taken from openweathermap.org.

This app is an improved version of my first weather app:
https://github.com/lukaszsliwinski/weather_app

## Demo
https://weatherapp.lukaszsliwinski.pl/

## Used technologies
Backend - Node / Express<br>
Frontend - React / Bootstrap<br>

## Setup and run develop version on localhost (Windows)
1 Install Node.js v.16 from website:<br>
&emsp;https://nodejs.org/en/download/<br>
2 Download repository
```bash
git clone https://github.com/lukaszsliwinski/weather_app_v2
```
3 Go into main directory
```bash
cd weather_app_v2
```
4 Install required packages
```bash
npm install
```
5 Create .env file in main directory. In this file, create variable:
```bash
API_KEY = 'your_api_key'
```
Create an account on https://openweathermap.org, get api key and assign to the API_KEY variable.<br><br>
6 Run develop server on localhost
```bash
npm run dev
```
7 Go into frontend directory
```bash
cd frontend
```
8 Install required packages
```bash
npm install
```
9 Run React frontend app
```bash
npm start
```
The app shoud open in browser on localhost:3000 