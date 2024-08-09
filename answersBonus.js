// Setup basic logic inside the weatherEventPredictor function ✅
export function weatherEventPredictor(temperature, forecast) {
    // Check if the temperature is below 0°C and the forecast is "snow" ✅
    if (temperature < 0 && forecast === "snow") {
      return "Snowstorm"; // If both conditions are true, return "Snowstorm" ✅
    };
    
    // Check if the temperature is between 0°C and 15°C inclusive and the forecast is "rain" ✅
    if (temperature >= 0 && temperature <= 15 && forecast === "rain") {
      return "Cold Rain"; // If both conditions are true, return "Cold Rain" ✅
    };
    
    // Check if the temperature is between 15°C and 30°C inclusive and the forecast is "sunshine" ✅
    if (temperature > 15 && temperature <= 30 && forecast === "sunshine") {
      return "Sunny Day"; // If both conditions are true, return "Sunny Day" ✅
    };
    
    // Check if the temperature is above 30°C and the forecast is "sunshine" ✅
    if (temperature > 30 && forecast === "sunshine") {
      return "Heatwave"; // If both conditions are true, return "Heatwave" ✅
    };
    
    // If none of the above conditions are met, return "Unpredictable" ✅
    return "Unpredictable";
  };