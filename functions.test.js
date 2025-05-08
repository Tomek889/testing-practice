const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions.js");

// capitalize test
test("capitalize from lowercase (test 1)", () => {
  expect(capitalize("t")).toBe("T");
});

test("capitalize from lowercase (test 2)", () => {
  expect(capitalize("thIs iS uppErCasE")).toBe("T");
});

test("capitalize from lowercase (test 3)", () => {
  expect(capitalize("THIS IS UPPERCASE")).toBe("T");
});

test("capitalize from lowercase (test 4)", () => {
  expect(capitalize("")).toBeUndefined();
});

// reverseString test
test("reverses a string (test 1)", () => {
  expect(reverseString("reversed")).toBe("desrever");
});

test("reverses a string (test 2)", () => {
  expect(reverseString("ko ko")).toBe("ok ok");
});

test("reverses a string (test 3)", () => {
  expect(reverseString("12345")).toBe("54321");
});

// calculator test
test("calculate addition (test 1)", () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test("calculate subtraction (test 2)", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("calculate division, (test 3)", () => {
  expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
});

test("calculate multiplication (test 4)", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

// caesarCipher test
test("caeser cipher (test 1)", () => {
  expect(caesarCipher("abcd", 4)).toBe("efgh");
});

test("caeser cipher (test 2)", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caeser cipher (test 3)", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caeser cipher (test 4)", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// analyzeArray test
test("analyzes an array (test 1)", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
