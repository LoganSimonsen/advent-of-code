const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .split("\n");

// console.log(input);

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

for (i = 0; i < input.length; i++) {
  let sInput = input[i].split(" ");

  switch (sInput[0]) {
    case "forward":
      horizontalPosition += parseInt(sInput[1]);
      depth += aim * parseInt(sInput[1]); //comment out for part 1
      break;
    case "down":
      //   depth += parseInt(sInput[1]); //comment out for part 2
      aim += parseInt(sInput[1]); //comment out for part 1
      break;
    case "up":
      //   depth -= parseInt(sInput[1]); //comment out for part 2
      aim -= parseInt(sInput[1]); //comment out for part 1
      break;
    default:
      console.log(`input not recognized`);
  }
}

console.log(depth, horizontalPosition, depth * horizontalPosition);
