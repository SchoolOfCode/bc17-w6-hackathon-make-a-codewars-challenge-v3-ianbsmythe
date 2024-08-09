export function kettleyOrFish(temperature, forecast) {
    if (temperature < 15 && forecast === "rain") {
        return "Kettley";
    }
    
    // Write function to return 'Fish' sunny and warm✅
    if (temperature >= 15 && forecast === "sunshine") {
        return "Fish";
    }

    // Write function to return confused: wether is unclear and temp is within range -30 to 50 degrees ✅
    if (( forecast !== "rain" && forecast !== "sunshine") && (temperature >= -30 && temperature <= 50)) {
        return "Confused";
    }

    // Write functions to return confused when Kettley and Fish info is mixed ✅
    if (temperature >= 15 && forecast === "rain") {
        return "Confused";
    }
    if (temperature < 15 && forecast === "sunshine") {
        return "Confused";
    }
    
    // default fallback for all other, invalid inputs ✅
    return "Confused";
  }