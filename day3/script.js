const fs = require('fs');

const l = 31;
let counter = 0;
let miss = 0;
let hit = 0;

fs.readFile('./day3/input.txt', 'utf8', (err, lines) => {
    lines = lines.split("\n");
    for(i=0;i<lines.length-1;i+=2){
        if(counter >= 31){
            counter -= 31;
        }
        console.log(counter, lines[i][counter])
        if(lines[i][counter]==='.'){
            miss++;
        }else{
            hit++
        }
        counter+=1
    }
    console.log(hit,miss)
});
