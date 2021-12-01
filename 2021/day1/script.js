const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.resolve(__dirname, "myInput.txt"), "utf8")
  .split("\n");

let previousLine = 0;
let increased = 0;
let decreased = 0;

for (i = 0; i < input.length; i++) {
  if (input[i] > previousLine) {
    increased++;
  } else {
    decreased++;
  }
  previousLine = input[i];
}

console.log(increased, decreased);
