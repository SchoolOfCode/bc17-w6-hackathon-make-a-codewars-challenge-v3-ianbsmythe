# Project Presentation 
# How are you feeling today... John Kettley 🌧️ or Michael Fish🌞?
![alt text](<john kettley.jpg> "John Kettley") 
# OR 
![alt text](_93286911_mediaitem93286909.jpg.webp "Michael Fish")

## Overview!

Create a function that determines if you are in a John Kettley, Michael Fish or Confused mood based on the weather forecast. 

For those who remember the weathermen, John Kettley and Michael Fish, you're blessed; for those who don't, you should checkout their hit (it reached 21 in the charts) song from 1988 by 'A Tribe Called Toffs' - John Kettley (is a Weatherman). https://www.youtube.com/watch?v=Db6WHtNV5-I 

## Problem Statement

Users need to implement a function `kettleyOrFish` that takes two inputs: `temperature` (a number) and `forecast` (a string). The function should return:
- "Kettley" if it's cold and rainy 
- "Fish" if it's warm and sunny 
- "Confused" if the conditions don’t match these scenarios like cloudy 

## Instructions for Participants
### 🌧️🌞 Hello Weather Lovers (or Haters)! 🌞🌧️

Welcome to the wonderful world of weather! Your task is to write a function called `kettleyOrFish`.  

### Setup first:
1) Clone the repo - https://github.com/SchoolOfCode/bc17-w6-hackathon-make-a-codewars-challenge-v3-ianbsmythe.git  
2) `npm install`
3) `npm install -d vitest`
4) Enter function into `kettleyOrFish.js` - Export skeleton is ready for your function/s
5) Test your functions - `npm test`
6) If you finish, there is a `bonusChallenge.js` - Export skeleton is ready for your function/s
7) Answers in `answer.js` files for each challenge

John Kettley is a famous British weatherman known for predicting rain (🌧️), and Michael Fish is known for
getting it wrong sometimes (🌤️). Depending on the forecast, you need to decide if you're more of a Kettley (expecting rain) or a Fish (expecting sunshine)... or simply Confused

### Here's the forecast:
- Only if the temperature is below 15°C and the forecast mentions "rain", you're feeling more like John Kettley. Return "Kettley".
- Only if the temperature is above and equal to 15°C and the forecast mentions "sunshine", you're channeling your inner Michael Fish. Return "Fish".
- If it's any other weather state, irrespective of the temperature, you're a bit confused, so just return "Confused".
- If the temperature and weather conditions go against the Kettley and Fish rules, surely you're "Confused", e.g. "rain" and 15°C or above. 

### Examples:
- kettleyOrFish(10, "rain") ➞ "Kettley"
- kettleyOrFish(20, "sunshine") ➞ "Fish"
- kettleyOrFish(15, "cloudy") ➞ "Confused"
- kettleyOrFish(25, "rain") ➞ "Confused"  

Your implementation should handle temperatures between -30°C and 50°C and common weather descriptions like "rain", "sunshine", "cloudy", etc.
 
- Write a function `kettleyOrFish(temperature, forecast)` that returns the appropriate weatherman or confused state based on the given conditions.
- The temperature will be an integer between -30 and 50.
- The forecast will be a string like "rain", "sunshine", "cloudy", etc.



# 🌞🥶 Bonus Challenge ☃️⛈️

## Introduction:
In this bonus challenge, you will extend your weather prediction skills by creating a function that predicts specific weather events based on temperature and forecast conditions. This function will take into account a range of temperatures and various weather conditions to determine what kind of weather event might occur.

The goal is to create a function that can accurately predict a specific weather event, like a snowstorm or a heatwave, given the temperature and the forecast condition. This challenge will test your ability to handle multiple conditions and edge cases effectively.

## Challenge Overview
Create a function, `weatherEventPredictor(temperature, "forecast")`, that predicts a weather event based on the given `temperature` (number) and weather `forecast` (string). The function will return specific strings based on certain conditions.

## Conditions to Handle
- Snowstorm: When it's below freezing and snowing.
- Cold Rain: When it's cold (0°C to 15°C) and raining.
- Sunny Day: When it's mild (15°C to 30°C) and sunny.
- Heatwave: When it's hot (above 30°C) and sunny.
- Unpredictable: For any other combinations of temperature and weather.

## Examples:

- weatherEventPredictor(-5, "snow") ➞ "Snowstorm"
- weatherEventPredictor(10, "rain") ➞ "Cold Rain"
- weatherEventPredictor(20, "sunshine") ➞ "Sunny Day"
- weatherEventPredictor(35, "sunshine") ➞ "Heatwave"
- weatherEventPredictor(25, "cloudy") ➞ "Unpredictable"

In this bonus challenge, you need to implement the function `weatherEventPredictor(temperature, forecast)` to predict specific weather events based on the given conditions. The temperature parameter should be an integer between -30°C and 50°C, and the forecast parameter will be a string describing the weather, such as "snow", "rain", "sunshine", or "cloudy".
