const fs = require('fs');

const lines = fs.readFileSync("./day6/input.txt", {encoding: 'utf-8'}).split('\n\n').filter(x => x)
let count = 0;
let countP2 = 0;
let linesP2 = [];

for(i=0;i<lines.length;i++){
    let linesP2 = lines[i].split("\n");
    lines[i] = lines[i].split("\n").join("");
}

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }

  function howManyRepeated(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    if (strArr != null) {
      strArr.forEach((elem) => {
        result.push(elem[0]);
      });
    }
    return result;
  }
  
  for(i=0;i<lines.length;i++){
      let temp = removeDuplicateCharacters(lines[i]);
      count+=temp.length;
  }

  console.log(count, countP2)

  