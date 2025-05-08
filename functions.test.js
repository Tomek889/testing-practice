const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
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
test("calculate addition", () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test("calculate subtraction", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("calculate division", () => {
  expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
});

test("calculate multiplication", () => {
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
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
  