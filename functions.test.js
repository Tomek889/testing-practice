const { capitalize, reverseString } = require("./functions.js");

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
