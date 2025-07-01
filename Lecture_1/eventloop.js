const fs = require('fs')
console.log("start")
setTimeout(()=>{
    console.log("timer callback")
}, 0)
setImmediate(()=>{
    console.log("set immediate callback")
})
fs.readFile("demo.txt", "utf-8", (data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2")
    }, 0)
    setImmediate(()=>{
        console.log("immd 2")
    })
})
console.log("end")