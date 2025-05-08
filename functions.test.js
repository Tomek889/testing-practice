const { capitalize } = require("./functions.js");

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
