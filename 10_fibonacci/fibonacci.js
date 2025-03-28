const fibonacci = function (countArg) {
  let count;
  if (typeof countArg !== "number") {
    count = parseInt(countArg);
  } else {
    count = countArg;
  }

  if (count < 0) return "OOPS";

  if (count === 0) return 0;

  let first = 1;
  let second = 0;

  for (let i = 2; i <= count; i++) {
    let current = first + second;
    second = first;
    first = current;
  }
  return first;
};

// Do not edit below this line
module.exports = fibonacci;
