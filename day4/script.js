const fs = require('fs');

let totalValid = 0;

fs.readFile('./day4/input.txt', 'utf8', (err, lines) => {
    let linArr = lines.split("\n").join(",").split(",,");
    for(i=0;i<linArr.length;i++){
        let counter = 0
        linArr[i] = linArr[i].split(" ").join(",")
        linArr[i] = linArr[i].split(",");
        //valid elements 
        let ve = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
        for(x=0;x<linArr[i].length;x++){
            linArr[i][x] = linArr[i][x].split(":");
            // console.log(linArr[i][x], linArr[i][x].some(r=> ve.indexOf(r) >= 0))
            if(linArr[i][x].some(r=> ve.indexOf(r) >= 0)){
                // remove elements from ve array (trying to avoid counting duplicates)
                ve = ve.filter(e => e !== linArr[i][x][0])
                counter++;
                // console.log(x,ve, counter); // visualization of what is happening through this loop/conditional
            }
}
// console.log(counter,linArr[i])
if(counter===7){totalValid++}
}
console.log(totalValid)
})
