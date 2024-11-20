const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("reverseString reverse", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("reverseString reverse with upperCase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
