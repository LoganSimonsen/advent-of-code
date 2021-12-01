const fs = require('fs');

let totalValid = 0;
let totalValidPart2 = 0;

fs.readFile('./day2/input.txt', 'utf8', (err, lines) => {
    lines = lines.split(RegExp('\n'))
    for(i=0;i<lines.length-1;i++){
        lines[i] = lines[i].split(/[ -.:;?!~,`"&|()<>{}\[\]\r\n/\\]+/)
        let password = lines[i][3].split("");
        let letterCount = 0;
        for(x=0;x<password.length;x++){
            // console.log(password[x],lines[i][2], password[x]===lines[i][2])
            if(password[x]===lines[i][2]){
                letterCount++
            }
        }
        // console.log(letterCount, letterCount<=lines[i][0] && letterCount>=lines[i][1])
        if(letterCount>=lines[i][0] && letterCount<=lines[i][1]){
            totalValid++
        }
        console.log(password[lines[i][0]-1], password[lines[i][1]-1], lines[i][2], password[lines[i][0]-1]===lines[i][2] && password[lines[i][1]-1]===lines[i][2])
        if(password[lines[i][0]-1]===lines[i][2] && password[lines[i][1]-1]===lines[i][2]){
           //goober
        }else if(password[lines[i][0]-1]===lines[i][2]){
            totalValidPart2++
        }else if(password[lines[i][1]-1]===lines[i][2]){
            totalValidPart2++
        }
        
    }

    console.log(totalValid);
    console.log(totalValidPart2);

})





