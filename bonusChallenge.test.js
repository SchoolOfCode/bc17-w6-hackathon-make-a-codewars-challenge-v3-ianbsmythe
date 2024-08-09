// Import test and expect from vitest ✅ 
import { test, expect } from "vitest"; 

// Import the function to be tested from ./bonusChallenge.js ✅
import { weatherEventPredictor } from "./bonusChallenge.js"; 

// Test function to return "Snowstorm" when it's below freezing and snowing ✅
test("returns 'Snowstorm' when it's below freezing and snowing", () => {
  // When temperature is -5 and forecast is "snow", the result should be "Snowstorm" ✅
  expect(weatherEventPredictor(-5, "snow")).toBe("Snowstorm");
});

// Test function to return "Cold Rain" when it's between 0°C and 15°C and raining ✅
test("returns 'Cold Rain' when it's between 0°C and 15°C and raining", () => {
  // When temperature is 10 and forecast is "rain", the result should be "Cold Rain" ✅
  expect(weatherEventPredictor(10, "rain")).toBe("Cold Rain");
});

// Test function to return "Sunny Day" when it's between 15°C and 30°C and sunny ✅
test("returns 'Sunny Day' when it's between 15°C and 30°C and sunny", () => {
  // When temperature is 20 and forecast is "sunshine", the result should be "Sunny Day" ✅
  expect(weatherEventPredictor(20, "sunshine")).toBe("Sunny Day");
});

// Test function to return "Heatwave" when it's above 30°C and sunny ✅
test("returns 'Heatwave' when it's above 30°C and sunny", () => {
  // When temperature is 35 and forecast is "sunshine", the result should be "Heatwave" ✅
  expect(weatherEventPredictor(35, "sunshine")).toBe("Heatwave");
});

// Test function to return "Unpredictable" for any other condition ✅
test("returns 'Unpredictable' for unclear conditions", () => {
  // When temperature is 25 and forecast is "cloudy", the result should be "Unpredictable" ✅
  expect(weatherEventPredictor(25, "cloudy")).toBe("Unpredictable");
});