# Universal Plastic Front End Developer 

 The web app consists of two screens: "Area Selector" and "Weather City". The app is built using React and utilizes the Tailwind CSS framework for styling. The Figma design provided was followed to maintain a consistent visual appearance.

## Table of Contents

- [Universal Plastic Front End Developer](#universal-plastic-front-end-developer)
  - [Table of Contents](#table-of-contents)
  - [Screens](#screens)
    - [Area Selector](#area-selector)
    - [Weather City](#weather-city)
  - [Navbar](#navbar)
  - [Deployment](#deployment)
  - [Running the App Locally](#running-the-app-locally)


## Screens

### Area Selector

The Area Selector screen allows users to input latitude and longitude values to display a location on a map. Key features of this screen include:

- **Location Component:** By default, the user's current location's latitude and longitude are displayed. Users can manually change these values, if the input is valid it will show an error message.
- **Area Component:** This component utilizes react-leaflet library to display the place matching the given latitude and longitude. It also features:
  - A marker indicating the location.
  - A circle around the location.
  - A slider to adjust the circle's radius (between 1km and 20km) which causes the map to zoom in and out accordingly.

### Weather City

The Weather City screen allows users to input a city name and displays the current weather conditions for that city. Includes the following features:

- **City Selector Component:** Users can select a city from the provided array of cities, setting the corresponding latitude and longitude for weather retrieval.
- **Weather Conditions Component:** This component fetch the data of the openweathermap.org API using the provided API key. It displays:
  - Current weather icon that changes if it is day or night.
  - Sunrise and sunset times in the city's timezone.
  - Current temperature and "feels like" temperature.
  - Humidity level presented as a progress bar.
  - A link to open Google Maps with the city's coordinates.

## Navbar

A navigation bar has been included to facilitate switching between the "Area Selector" and "Weather City" screens.

## Deployment

The app has been deployed and is accessible at: [https://universal-plastic.vercel.app/](https://universal-plastic.vercel.app/). 

## Running the App Locally

To run the app on your local machine, follow these steps:

1. Clone this repository:

`git clone https://github.com/pdelbarrio/universal-plastic.git`

2. Navigate to the project directory.

3. Install the dependencies using `npm install`.

4. Start the development server using `npm run dev`
   
5.  Open your web browser and visit [http://localhost:5173/](http://localhost:5173/) to view the app locally.