# bike-trails 🚲

## Table Of Contents
  * [About](#about)
  * [Technologies](#technologies)
  * [Launch](#launch)
  * [Setup](#setup)
  * [Screenshot](#screenshot)

## About
Find a bike trail or accessible cycling streets in your selected city.

In this project I learned how to use the Google Maps API in React using the react-google-maps/api library.

![GitHub repo size](https://img.shields.io/github/repo-size/randallwstanford/bike-trails?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/randallwstanford/bike-trails?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/randallwstanford/bike-trails?color=red&style=plastic)

## Technologies
 - React version: 17.0.2
 - react-google-maps/api version: 2.7.0
 - express.js version: 4.17.2
 - eslint version: 8.8.0

## Setup
- Go to [Google Cloud Platform](https://console.cloud.google.com)
- Click drop down menu in top left and click "New Project"
- Enable these google APIs:
  - Geocoding API
  - Maps JavaScript API
  - Places API
- Create API key
- Open up `api-key.example.js` and rename it to `api-key.js` and enter your api key into the apiKey string.

## Launch
```
$ cd ../bike-trails
$ npm install
$ npm run server
```
Open new terminal window
```
$ cd ../bike-trails
$ npm run build
```

## Screenshot
![bike-trails-screenshot](https://user-images.githubusercontent.com/83252804/152218263-93d6f53b-b9df-43b3-ad73-9c144fe262d3.png)
