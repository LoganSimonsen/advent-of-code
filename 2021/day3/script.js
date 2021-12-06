const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .split("\n");

let positions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let solution = [];
let gammaArr = [];
let epsilonArr = [];
let gammaBinary = 0;
let epsilonBinary = 0;
let gammaDecimal = 0;
let epsilonDecimal = 0;

for (i = 0; i < input.length; i++) {
  let temp = input[i].split("");

  for (x = 0; x < temp.length; x++) {
    if (temp[x] == 1) {
      positions[x]++;
    } else {
      positions[x]--;
    }
  }
}

for (i = 0; i < positions.length; i++) {
  solution.push(+positions[i]);
}

for (i = 0; i < solution.length; i++) {
  if (solution[i] > 0) {
    gammaArr.push(1);
    epsilonArr.push(0);
  } else {
    gammaArr.push(0);
    epsilonArr.push(1);
  }
}

gammaBinary = +gammaArr.join("");
epsilonBinary = +epsilonArr.join("");
gammaDecimal = parseInt(gammaBinary, 2);
epsilonDecimal = parseInt(epsilonBinary, 2);

console.log(gammaDecimal * epsilonDecimal);
