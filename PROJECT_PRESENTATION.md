# Project Presentation: How are you feeling today... John Kettley or Micahel Fish?

## Overview

In this kata, create a function that determines if you are in a John Kettley, Michael Fish or simply confused mood based on the weather forecast. 

For those who remember the weathermen, John Kettley and Michael Fish, you're blessed; for those who don't, you should definitely go and checkout this chart topping song from 1988 by 'A Tribe Called Toffs' - John Kettley (is a weatherman) https://www.youtube.com/watch?v=Db6WHtNV5-I .

## Problem Statement

Users need to implement a function `kettleyOrFish` that takes two inputs: `temperature` (a number) and `forecast` (a string). The function should return:
- "Kettley" if it's cold and rainy 
- "Fish" if it's warm and sunny 
- "Confused" if the conditions don’t match these scenarios like cloudy 

## Instructions for Participants

- Write a function `kettleyOrFish(temperature, forecast)` that returns the appropriate weatherman or confused state based on the given conditions.
- The temperature will be an integer between -30 and 50.
- The forecast will be a string like "rain", "sunshine", "cloudy", etc.


### Plan:

1) Setup environment
    - Clone repo and cd to it ✅
    - npm install to download dependencies in package.json ✅
    - npm install vitest ✅
    - Update package.json to include test script: vitest ✅
    - Include "dev": "vitest --watch" within the scripts to automatically re-run them during develpoment with npm run dev' ✅

2) Plan the kata
    - Theme: use famous weathermen, John Kettley and Michael Fish ✅
    - Goal: determine if the weather makes your feeling more Kettley or Fish ✅
    - Rules of game: cold and rainey, and <15°C - Kettley; sunny and warm, and >=15°C - Fish; confused weather conditions = *confused* ✅

3) Write the description
    - Rename 'main.js' as 'kettleyOrFish.js' ✅
    - Add introduction as multiline comment ✅
    - Make sure clear examples are in the comment to guide users on how the function should work ✅
    - Include export function in 'kettleyOrFish.js' ✅

4) Write barebones unit tests
    - Rename 'main.test.js' as kettleyOrFish.test.js' ✅
    - In test file import vitest ✅
    - In test file import function from ./kettleyOrFish.js ✅
    - Write a basic, bare bones test to fail TDD ✅
    - Run the barebones test and receive error when npm test is run ✅
    - Write another test to confirm setup ✅
    - Run the second test to pass as function exists in kettleyOrFish ✅
    - Ensure all basic tests work before moving forward ✅

|  Conditions   |  TC1     |   TC2    |   TC3    |    TC4   |    TC5   |    TC6   |    TC7   |    TC8   |  
|---------------|----------|----------|----------|----------|----------|----------|----------|----------|
| Sunshine      |    Y     |    X     |    X     |    Y     |    X     |    X     |    X     |    X     |        
| Rain          |    X     |    Y     |    X     |    X     |    Y     |    X     |    X     |    Y     |          
| Unclear/Other |    X     |    X     |    Y     |    X     |    X     |    Y     |    Y     |    X     |          
| Temperature   |    20    |    10    |    15    |    12    |    25    |    11    |    32    |   -10    |
| Kettley       |    X     |    Y     |    X     |    X     |    X     |    X     |    X     |    Y     |
| Fish          |    Y     |    X     |    X     |    X     |    X     |    X     |    X     |    X     |
| Confused      |    X     |    X     |    Y     |    Y     |    Y     |    Y     |    Y     |    X     |

5) Writing the full unit tests
    - Create the tests for specific weather conditions 1: rain ✅
    - Write second test for warm and sunny conditions 2: sunshine ✅
    - Write third test for unclear conditions ✅
   
