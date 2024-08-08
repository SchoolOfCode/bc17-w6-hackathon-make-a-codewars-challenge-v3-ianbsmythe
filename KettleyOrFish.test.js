// rename file ✅
// import vitest ✅
import { test, expect } from "vitest";

// import function from ./kettleyOrFish.js ✅
import { kettleyOrFish } from "./kettleyOrFish.js";

// write barebones test to fail TDD ✅
// npm test to run test and have it fail ✅
test("this is a bare bones - it should fail as function is not implemented", () => {
    expect(() => kettleyOrFish(10, "rain")).toThrow();
});

// write second test to confirm setup ✅
// npm test
test("barebones 2 test - function should exist"), () => {
    expect(typeof kettleyOrFish).toBe("function");
}