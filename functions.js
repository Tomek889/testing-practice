function capitalize(text) {
  return text.trim().toUpperCase()[0];
}

function reverseString(text) {
  let reversed = "";
  for (let i = 0; i < text.length; i++) {
    reversed += text[text.length - 1 - i];
  }
  return reversed;
}

let calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
};
