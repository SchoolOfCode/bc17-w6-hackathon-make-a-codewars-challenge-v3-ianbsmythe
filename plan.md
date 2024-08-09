# Plan:

## 1) Setup environment
- Clone repo and cd to it ✅
- npm install to download dependencies in package.json ✅
- npm install vitest ✅
- Update package.json to include test script: vitest ✅
- Include "dev": "vitest --watch" within the scripts to automatically re-run them during develpoment with npm run dev' ✅

## 2) Plan the Kata
- Theme: use famous weathermen, John Kettley and Michael Fish ✅
- Goal: determine if the weather makes your feeling more Kettley or Fish ✅
- Rules of game: cold and rainey, and <15°C - Kettley; sunny and warm, and >=15°C - Fish; confused weather conditions = confused ✅

### Test Case Scenarios - Decision Table

|  Conditions   | Test Case 1 | Test Case 2|Test Case 3| Test Case 4| Test Case 5| Test Case 6| Test Case 7| Test Case 8|  
|---------------|------------|------------|----------|-----------|----------|-----------|----------|----------|
| Sunshine 🌞      |    ✅      |    ❌     |    ❌    |    ✅    |    ❌    |    ❌    |    ❌    |    ❌   |        
| Rain 🌧️         |    ❌      |    ✅     |    ❌    |    ❌    |    ✅    |    ❌    |    ❌    |    ✅   |          
| Unclear/Other ❄️|    ❌      |    ❌     |    ✅    |    ❌    |    ❌    |    ✅    |    ✅    |    ❌   |          
| Temperature 🌡️  |    20      |    10      |    15    |    12     |    25    |    11     |    32    |   -10    |
| Kettley       |    ❌      |    ✅     |    ❌    |    ❌    |    ❌    |    ❌    |    ❌    |    ✅   |
| Fish          |    ✅      |    ❌     |    ❌    |    ❌    |    ❌    |    ❌    |    ❌    |    ❌   |
| Confused  😕    |    ❌      |    ❌     |    ✅    |    ✅    |    ✅    |    ✅    |    ✅    |    ❌   |

## 3) Write the description
- Rename 'main.js' as 'kettleyOrFish.js' ✅
- Add introduction as multiline comment ✅
- Make sure clear examples are in the comment to guide users on how the function should work ✅
- Include export function in 'kettleyOrFish.js' ✅

## 4) Write barebones unit tests
- Rename 'main.test.js' as kettleyOrFish.test.js' ✅
- In test file import vitest ✅
- In test file import function from ./kettleyOrFish.js ✅
- Write a basic, bare bones test to fail TDD ✅
- Run the barebones test and receive error when npm test is run ✅
- Write another test to confirm setup ✅
- Run the second test to pass as function exists in kettleyOrFish ✅
- Ensure all basic tests work before moving forward ✅

## 5) Writing the full unit tests
- Create the tests for specific weather conditions 'rain' ✅
- Write second test for warm and sunny conditions 'sunshine' ✅
- Write third test for unclear conditions, e.g. 'cloudy', 'foggy' etc. ✅
- Write additional testing for mixed Kettley and Fish conditions and temperatures ✅

## 6) Adding function solution
- Write function to return 'Kettley' ✅
- Write function to return 'Fish' ✅
- Write function to return confused... include -30 to 50 degrees ✅
- Write functions to return confused when Kettley and Fish info is mixed ✅

## 7) Run the tests. 
- Should be 1 failed and 5 passed ✅
- Comment out barebones to show TDD process ✅
- should be 1 working test file and 4 working tests ✅

# 

# Bonus Challenge Plan: Weather Event Predictor

## 1) Setup Environment
- create bonusChallenge.js and bonusChallenge.test.js files ✅


## 2) Plan the Bonus Challenge

### Theme: 
- The bonus challenge extends the original theme of predicting weather-based responses (`Kettley`, `Fish` and `Confused`), taking it a step further by predicting specific weather events based on temperature and forecast conditions. Users are to predict whether they should expect a snowstorm, cold rain, a sunny day, a heatwave, or something unpredictable based on given weather data they include within their function. ✅

### Goal: 
- Develop a function that predicts a specific weather event based on temperature and forecast data. ✅

### Rules of the challenge: 
- Temperature and Forecast Input: Function will take two inputs: a temperature (in degrees Celsius) and a forecast condition (as a string).✅
- Weather Event Prediction Logic: ✅
    - If the temperature is below 0°C and the forecast is "snow", the function should return "Snowstorm". If the temperature is between 0°C and 15°C (inclusive) and the forecast is "rain", the function should return "Cold Rain". ✅
    - If the temperature is between 15°C and 30°C (inclusive) and the forecast is "sunshine", the function should return "Sunny Day". ✅
    - If the temperature is above 30°C and the forecast is "sunshine", the function should return "Heatwave". ✅
    - For any other combination of temperature and forecast conditions, the function should return "Unpredictable". ✅

### Edge Cases:
- The function must handle temperatures ranging from extremely cold (-50°C) to extremely hot (50°C). ✅
- It should also handle a variety of forecast conditions, including "snow", "rain", "sunshine", and others like "cloudy", "foggy", "stormy", etc. ✅

### Testing requirements:
- Write unit tests that cover all of the above conditions and edge cases ✅
- Tests include both scenarios (e.g. 20 degrees and sunny) and edge cases (e.g. 0 degrees and snowy) ✅

### Test Case Scenarios - Decision Table
| Conditions and Actions                | Test Case 1  | Test Case 2| Test Case 3  | Test Case 4| Test Case 5  | Test Case 6| Test Case 7  | Test Case 8|
|---------------------------------------|--------------|------------|--------------|------------|--------------|------------|--------------|------------|
| Snow                                  | ✅          | ❌         | ❌          | ❌         | ❌          | ❌         | ✅          | ❌         |
| Rain                                  | ❌          | ✅         | ❌          | ❌         | ❌          | ❌         | ❌          | ❌         |  
| Sunshine                              | ❌          | ❌         | ✅          | ✅         | ❌          | ❌         | ❌          | ✅         |
| Coudy                                 | ❌          | ❌         | ❌          | ❌         | ❌          | ❌         | ❌          | ❌         |
| Foggy                                 | ❌          | ❌         | ❌          | ❌         | ✅          | ❌         | ❌          | ❌         |
| Stormy                                | ❌          | ❌         | ❌          | ❌         | ❌          | ✅         | ❌          | ❌         |
|---------------------------------------|--------------|------------|--------------|------------|--------------|------------|--------------|------------|
| Temperature                           | -10         | 9           | 17           | 42         | 12           | 49         | 1            | 5          |
|---------------------------------------|--------------|------------|--------------|------------|--------------|------------|--------------|------------|
| Snowstorm (Below 0°C and snow)        | ✅          | ❌         | ❌          | ❌         | ❌          | ❌         | ❌          | ❌         |
| Cold Rain (0°C to 15°C and rain)      | ❌          | ✅         | ❌          | ❌         | ❌          | ❌         | ❌          | ❌         |
| Sunny Day (15°C to 30°C and sunshine) | ❌          | ❌         | ✅          | ❌         | ❌          | ❌         | ❌          | ❌         |
| Heatwave (Above 30°C and sunshine)    | ❌          | ❌         | ❌          | ✅         | ❌          | ❌         | ❌          | ❌         |
| Unpredictable (Any other combinations)| ❌          | ❌         | ❌          | ❌         | ✅          | ✅         | ✅          | ✅         |

## 3) Write the Description in presentation.md  
- Include export function in 'kettleyOrFish.js' ✅

## 4) Write barebones unit tests
- Write a basic, bare bones test to fail TDD ✅
- Run the barebones test and receive error when npm test is run ✅
- Write another test to confirm setup ✅
- Run the second test to pass as function exists in bonusChallenge ✅
- Ensure all basic tests work before moving forward ✅

## 5) Writing the full unit tests
- Create the initial test for a specific weather condition ✅
- Write additional tests for other weather conditions ✅
- Write third test for unpredictable ✅
- Write additional testing for mixed temperature and weather conditions to return Unpredictable ✅

## 6) Adding function solution
- Write function to return 'Snowstorm' ✅
- Write function to return 'Cold Rain' ✅
- Write function to return 'Sunny Day' ✅
- Write function to return 'Heatwave' ✅
- Write function to return unpredictable ✅
- Write functions to return unpredicatable when weather condition doesn't meet temperature spec ✅

## 7) Run the tests. 
- Should be 1 failed and 6 passed ✅
- Comment out barebones to show TDD process ✅
- should be 1 working test file and 5 working tests ✅