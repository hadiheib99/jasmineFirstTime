import { add, multiply } from "../src/calculator";

describe("Calculator", () => {
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should multiply two numbers correctly", () => {
    expect(multiply(2, 1)).toBe(2);
  });
  it("should multiply two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
