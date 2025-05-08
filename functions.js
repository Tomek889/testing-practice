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

module.exports = {
  capitalize,
  reverseString,
};
