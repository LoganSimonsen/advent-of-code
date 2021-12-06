const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.resolve(__dirname, "myInput.txt"), "utf8")
  .split("\n");

let previousLine = 0;
let increased = 0;
let decreased = 0;
let windowIncrease = 0;
let windowDecrease = 0;

for (i = 0; i < input.length; i++) {
  if (input[i] > previousLine) {
    increased++;
  } else {
    decreased++;
  }
  previousLine = input[i];

  //part2

  let A = (+input[i] || 0) + (+input[i + 1] || 0) + (+input[i + 2] || 0);
  let B = (+input[i + 1] || 0) + (+input[i + 2] || 0) + (+input[i + 3] || 0);

  if (B > A) {
    windowIncrease++;
  } else {
    windowDecrease++;
  }
  //   console.log(A, B, B > A, windowIncrease);
}

console.log(increased, windowIncrease);
