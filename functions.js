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

function caesarCipher(text, shift) {
  let encrypted = "";

  shift = shift % 26;

  for (let char of text) {
    // Check whether a character is a letter
    if (char.toUpperCase() != char.toLowerCase()) {
      let charCode = char.charCodeAt(0);

      if (char >= "A" && char <= "Z") {
        // Uppercase
        charCode = charCode + shift;
        if (charCode > 90) {
          charCode = 65 + (charCode - 91);
        } else if (charCode < 65) {
          charCode = 90 - (64 - charCode);
        }
      } else if (char >= "a" && char <= "z") {
        // Lowercase
        charCode = charCode + shift;
        if (charCode > 122) {
          charCode = 97 + (charCode - 123);
        } else if (charCode < 97) {
          charCode = 122 - (96 - charCode);
        }
      }
      encrypted += String.fromCharCode(charCode);
    } else {
      encrypted += char;
    }
  }
  return encrypted;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};
