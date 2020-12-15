const fs = require('fs');

let totalValid = 0;

let ve = ["bry", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

fs.readFile('./day4/input.txt', 'utf8', (err, lines) => {
    let linArr = lines.split("\n").join(",").split(",,");
    for(i=0;i<linArr.length;i++){
        let counter = 0
        linArr[i] = linArr[i].split(" ").join(",")
        linArr[i] = linArr[i].split(",");
        //valid elements 
        let ve = ["bry", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
        for(x=0;x<linArr[i].length;x++){
            linArr[i][x] = linArr[i][x].split(":");
            // console.log(linArr[i][x].some(r=> ve.indexOf(r) >= 0))
            if(linArr[i][x].some(r=> ve.indexOf(r) >= 0)){
                //remove elements from ve array (trying to avoid counting duplicates)
                ve = ve.filter(e => e !== linArr[i][x][0])
                // console.log(x,ve);
                counter++;
            }
}
if(counter===6){totalValid++}
// console.log(counter,linArr[i])
}
console.log(totalValid)
})
