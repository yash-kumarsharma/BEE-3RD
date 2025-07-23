const express = require("express")
const app = express();

app.use(express.static(__dirname+"/public"))

app.use(express.urlencoded({extended: true}))

// app.get("/", (req, res)=>{
//     res.sendFile(__dirname+"/index.html")
// })

// app.get("/about", (req, res)=>{
//     res.sendFile(__dirname+"/about.html")
// })

app.post("/users", (req, res)=>{
    //username, password
    let name = req.body.name
    let pass = req.body.pass
    res.json({
        name,
        pass
    })
})

app.listen(4444, ()=>{
    console.log("Server Started")
})