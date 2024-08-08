// rename file ✅
// import vitest ✅
import { test, expect } from "vitest";

// import function from ./kettleyOrFish.js ✅
import { kettleyOrFish } from "./kettleyOrFish.js";

// write barebones test to fail TDD ✅
// npm test to run test and have it fail ✅
// point 7 of plan - comment out barebones tests✅

/* test("this is a bare bones - it should fail as function is not implemented", () => {
    expect(() => kettleyOrFish(10, "rain")).toThrow();
}); */

// write second test to confirm setup ✅
// npm test to run test and have it pass - ensure function exists and is the correct type ✅
// point 7 of plan - comment out barebones tests ✅

/* test("barebones 2 test - function should exist"), () => {
    expect(typeof kettleyOrFish).toBe("function");
}; */

// ensure all basic tests work before moving forward with writing unit tests ✅

// Create the tests for specific weather conditions ✅
// Test 1: rain ✅ 
test("should return 'Kettley' for cold and rainy conditions", () => {
    expect(kettleyOrFish(-5, "rain")).toBe("Kettley");
    expect(kettleyOrFish(14, "rain")).toBe("Kettley");
});

// Write second test for warm and sunny conditions 2: sunshine ✅
test("should return 'Fish' for warm and sunny conditions", () => {
    expect(kettleyOrFish(20, "sunshine")).toBe("Fish");
    expect(kettleyOrFish(32, "sunshine")).toBe("Fish");
});

// Write third test for unclear conditions with several unclear weather conditions ✅
test("should return 'Confused' for any unclear weather conditions", () => {
    expect(kettleyOrFish(10, "foggy")).toBe("Confused");
    expect(kettleyOrFish(20, "overcast")).toBe("Confused");
    expect(kettleyOrFish(15, "cloudy")).toBe("Confused");
});

// Write additional testing for mixed Kettley and Fish conditions and temperatures ✅
test("should return 'Confused' for any mixed 'Kettley' and 'Fish' conditions/temperatures'", () => {
    expect(kettleyOrFish(17, "rain")).toBe("Confused");
    expect(kettleyOrFish(6, "sunshine")).toBe("Confused");
});

