const fs = require("fs");
console.log(fs);
console.log("hi")

function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}

fs.readFile("demo.txt", "utf-8", (data)=>{
    console.log(data);
})
add(2,3);
sub(5,6)
multiply(3,2)
console.log("exit")