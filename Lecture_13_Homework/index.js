const express = require("express")
const app = express()
const fs = require("fs")

app.use(express.static(__dirname+"/public"))

app.get("/user",(req,res)=>{
    fs.readFile("./user.json","utf-8",function(err,data){
        if(err) res.send(err)
        let allUsers = JSON.parse(data)
        res.json(allUsers)
    })
})

app.post("/user", (req, res)=>{
 
    let name = req.body.name
    let age = req.body.age

    const user = {name, age}

    fs.writeFile("user.json", JSON.stringify(user), (err)=>{
        if(err){
            res.status(400).send("Error Occurred")
        }
        res.send("User added")
    })
})

app.listen(3000, ()=>{
    console.log("Server started")
})