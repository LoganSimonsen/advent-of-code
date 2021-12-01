const fs = require('fs');

let totalValid = 0;
let totalValidP2 = 0;

fs.readFile('./day4/input.txt', 'utf8', (err, lines) => {
    let linArr = lines.split("\n").join(",").split(",,");
    for(i=0;i<linArr.length;i++){
        let counter = 0;
        let counterP2 = 0;
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
            //part 2 switch case
            let eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
            // console.log(counterP2, linArr[i][x][0], linArr[i][x][1])
            switch(linArr[i][x][0]) {
                case "byr":
                    console.log(parseInt(linArr[i][x][1]) >= 1920 && parseInt(linArr[i][x][1]) <= 2002,parseInt(linArr[i][x][1]) )
                  if(parseInt(linArr[i][x][1]) >= 1920 && parseInt(linArr[i][x][1]) <= 2002){
                    counterP2++
                    }
                  break;
                case "iyr":
                    // console.log(parseInt(linArr[i][x][1]) >= 2010 && parseInt(linArr[i][x][1]) <= 2020, parseInt(linArr[i][x][1]))
                    if(parseInt(linArr[i][x][1]) >= 2010 && parseInt(linArr[i][x][1]) <= 2020){counterP2++}
                  break;
                  case "eyr":
                    //   console.log(parseInt(linArr[i][x][1]) >= 2020 && parseInt(linArr[i][x][1]) <= 2030, linArr[i][x][1])
                    if(parseInt(linArr[i][x][1]) >= 2020 && parseInt(linArr[i][x][1]) <= 2030){counterP2++}
                  break;
                  case "hgt":
                      let temp1 = (linArr[i][x][1].includes("cm") && parseInt(linArr[i][x][1]) >=150 && parseInt(linArr[i][x][1]) <=193);
                      let temp2 = (linArr[i][x][1].includes("in") && parseInt(linArr[i][x][1]) >=59 && parseInt(linArr[i][x][1])<=76);
                    //   console.log(temp1, linArr[i][x][1], temp2, linArr[i][x][1])
                    if(temp1 || temp2){
                        counterP2++
                      }
                  break;
                  case "hcl":
                      let temp = (/#[a-z0-9]{6}/).test(linArr[i][x][1]);
                    //   console.log(temp, linArr[i][x][1])
                    if(temp){counterP2++}
                  break;
                  case "ecl":
                      let t = eyeColors.includes(linArr[i][x][1])
                    if(t){counterP2++}
                  break;
                  case "pid":
                      let te = (/[0-9]{9}/).test(linArr[i][x][1]);
                    if(te){counterP2++}
                  break;
                default:
              }
}
// console.log(counter,linArr[i])
if(counter===7){totalValid++}
if(counterP2===7 && counter===7){totalValidP2++}
}
console.log(`Part 1 Answer: ${totalValid}`, `Part 2 Answer: ${totalValidP2}`)
})

