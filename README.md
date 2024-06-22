# UTA Bus Stop App

## Overview

Welcome to the UTA Bus Stop App! This application is designed to help users locate bus stops within the Utah Transit Authority (UTA) network. Leveraging the powerful capabilities of ArcGIS, the app provides an intuitive and interactive map interface that enhances the commuting experience by making public transit information easily accessible.

## Description

The UTA Bus Stop App is a map-based software built using ArcGIS. It displays the locations of all UTA bus stops, allowing users to find the nearest stops and plan their journeys efficiently. The app includes features such as:

- Interactive Map: Zoom in and out to explore different areas and find bus stops.
- Detailed Information: Click on a bus stop to view additional information

### How to Use

- Open the App: Launch the UTA Bus Stop Web App
- Explore the Map: Use the interactive map to browse different areas.
- Zoom in/out: Use your mouse scroll wheel or touch gestures.
- Pan: Click and drag the map to move around.
- Find Bus Stops: Bus stops are marked on the map. Click on any bus stop icon to view detailed information about that stop.

The data used in this application comes from the UTA's publicly available transit data. The data is included in the projects code under the `uta-gtfs-data` directory.

## Purpose

As a software engineer, my primary goal in developing the UTA Bus Stop App was to enhance my skills in Geographic Information Systems (GIS) and improve my proficiency with ArcGIS software. This project allowed me to explore the integration of public transportation data with interactive mapping tools, providing a practical and user-friendly solution for commuters.

[Software Demo Video](https://youtu.be/TA_tL2rSI1I)

# Development Environment

The UTA Bus Stop App was developed using a combination of powerful tools and technologies to create a seamless and efficient user experience. Here is a detailed breakdown of the tools, programming languages, and libraries used in the development process:

## Tools and Technologies

- **ArcGIS:** The core mapping technology
- **Express:** A minimal and flexible Node.js web application framework used to launch the app on a local server.

## Programming Language and Libraries

- **JavaScript:** The primary programming language used for both client-side and server-side development.
- **Express:** Used to set up the web server and handle HTTP requests and responses. The app runs on localhost:3000 using Express.
- **ArcGIS API for JavaScript:** A library that provides the tools and functions necessary to integrate ArcGIS capabilities into the web app. This API facilitates the creation and manipulation of the interactive map and its elements.
- **convert-csv-to-json:** Used to read the `stops.txt` file and convert it into a json object.

## Setting Up and Running the App

1. Install Node.js and npm: Ensure that Node.js and npm (Node Package Manager) are installed on your machine. You can download them from Node.js.
1. Install Dependencies: Navigate to the project directory and run the following command to install the required dependencies:
   1. `npm install`
1. Start the Server: Launch the app by starting the Express server. Run the following command:
   1. `npm start`
1. Access the App: Open your web browser and go to [http://localhost:3000](http://localhost:3000.). The UTA Bus Stop App will be available, allowing you to explore the map and find bus stops.

# Useful Websites

- [ArcGIS Developers](https://developers.arcgis.com/documentation/)
- [Express JS](https://expressjs.com/)
- [convert-csv-to-json](https://www.npmjs.com/package/convert-csv-to-json)

# Future Work

- Search Bar
- Real Time Bus Data
- Filters
  - By Route
  - By Direction
  - etc.
