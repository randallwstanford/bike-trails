# bike-trails 🚲

## Table Of Contents

* [About](#about)
* [Technologies](#technologies)
* [Launch](#launch)
* [Setup](#setup)
* [Legend](#legend)
* [Screenshots](#screenshots)

## About

Find a bike trail or accessible cycling streets in your selected city.

In this project I learned how to use the Google Maps API in React using the react-google-maps/api library.

![GitHub repo size](https://img.shields.io/github/repo-size/randallwstanford/bike-trails?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/randallwstanford/bike-trails?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/randallwstanford/bike-trails?color=red&style=plastic)

## Technologies

* React version: 17.0.2
* react-google-maps/api version: 2.7.0
* express.js version: 4.17.2
* eslint version: 8.8.0

## Setup

* Go to [Google Cloud Platform](https://console.cloud.google.com)

* Click drop down menu in top left and click "New Project"
* Enable these google APIs:
  * Geocoding API
  * Maps JavaScript API
  * Places API
* Create API key
* Open up `api-key.example.js` and rename it to `api-key.js` and enter your api key into the apiKey string.

## Launch

* Open terminal

```
cd ../bike-trails
npm install
npm run server
```

* Open new terminal window

```
cd ../bike-trails
npm run build
```

* Go to <http://localhost:3000/>

## Legend

<div align="center">
 <img src="https://user-images.githubusercontent.com/83252804/152416331-c610d3bf-7632-4c6c-b5fa-3af8c2034ba0.png" />
</div>

## Screenshots

![bike-trails-screenshot](https://user-images.githubusercontent.com/83252804/152413877-c9802309-fb35-4572-acc4-9f6f50abe303.png)
![bike-trails-screenshot2](https://user-images.githubusercontent.com/83252804/152415886-42f1a5ee-df1f-449f-b84b-b4213bbf7e7b.png)
![bike-trails-screenshot3](https://user-images.githubusercontent.com/83252804/152416127-c1ac5b8a-c5f5-45de-9cc4-d593258cebd5.png)
