const palindromes = function (pal) {
  const todo = "abcdefghijklmnopqrstuvwxyz0123456789";

  const limpia = pal
    .toLowerCase()
    .split("")
    .filter((character) => todo.includes(character))
    .join("");

  const reversed = limpia.split("").reverse().join("");

  return limpia === reversed;
};

// Do not edit below this line
module.exports = palindromes;
