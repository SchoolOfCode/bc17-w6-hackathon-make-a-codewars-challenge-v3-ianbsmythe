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
