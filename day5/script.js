const fs = require('fs');

const lines = fs.readFileSync("./day5/input.txt", {encoding: 'utf-8'}).split('\n').filter(x => x);

function stringToInt(str) {
    return parseInt([...str].map(x => x === 'B' || x === 'R' ? 1 : 0).join(''), 2);
}

class Seat {
    constructor(string) {
        const chars = [...string];
        this.row = stringToInt(string.slice(0,7))
        this.column = stringToInt(string.slice(7))
        this.id = this.row*8 + this.column;
    }
}

const seats = []

for (const line of lines) {
    const s = new Seat(line);
    seats.push(s);
}

const ids = seats.map(s => s.id);

//part 1 answer
console.log(Math.max(...ids));

ids.sort((a,b)=> a-b);

//part 2 answer
for(i=0;i<ids.length;i++){
    if(ids[i+1]-ids[i]>1){
        console.log(ids[i]+1);
        break;
    }
}
