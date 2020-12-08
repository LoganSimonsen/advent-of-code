const input = require("./input.js");

let totalValid = 0;

function evaluate(){
    Object.keys(input).forEach(key => {
        let count = 0;
        let minMax = key.split(" ");
        minMax[0] = minMax[0].split("-");
        let password = input[key].split("");
        for(i=0;i<password.length;i++){
            if(password[i] === minMax[1]){
                count++;
            }
        }
        //==========trying to figure out why my count is wrong...
        console.log(parseInt(minMax[0][0]), parseInt(minMax[0][1]), count, count>=parseInt(minMax[0][0]) && count<=parseInt(minMax[0][1]));
        //============
        if(count>=parseInt(minMax[0][0]) && count<=parseInt(minMax[0][1])){
            totalValid++
        }
      });
      return `there are ${totalValid} valid passwords out of ${Object.keys(input).length}`
}

console.log(evaluate())
