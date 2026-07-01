const input = require('readline-sync')
const secreto = 42
let tentativa = 0
while(true){
    let qualnum = Number(input.question())
    tentativa++
    if(qualnum === secreto){ 
        break
    }
    else if(secreto > qualnum){
    console.log("numero é maior")
}
else{
console.log("numero é menor")

}
    }