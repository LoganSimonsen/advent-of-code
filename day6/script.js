const fs = require('fs');

const lines = fs.readFileSync("./day6/input.txt", {encoding: 'utf-8'}).split('\n\n').filter(x => x)
let count = 0;

for(i=0;i<lines.length;i++){
    lines[i] = lines[i].split("\n").join("")
    
}

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  
  for(i=0;i<lines.length;i++){
      lines[i] = removeDuplicateCharacters(lines[i]);
      count+=lines[i].length;
  }
  console.log(count)
