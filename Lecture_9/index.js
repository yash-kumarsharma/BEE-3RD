const express = require("express")
const fs = require("fs")

const app = express();

app.use(express.json());

// app.get("/", (req, res)=>{
//     console.log("Data sent on server")
//     res.send("Yash Kumar Sharma")
// })

app.post("/user", (req, res)=>{
    let alluser = [];
    let name = req.body.name
    let pass = req.body.pass
    let user = {name, pass}
    
    fs.readFile("index.txt", "utf-8", (err, data)=>{
        if(err){
            return res.status(400).send("Error reading file")
        }
        if(data && data.length>0){
            alluser = JSON.parse(data);
        }
        alluser.push(user)
        fs.writeFile("index.txt", JSON.stringify(alluser),(err)=>{
            if(err){
            return res.status(400).send("Error Occured")
        }
        
        res.send("User saved")
        })
    })
    // alluser.push(user)
    // console.log(user)

    // fs.appendFile("index.txt", JSON.stringify(alluser), (err)=>{
    //     if(err){
    //         return res.status(400).send("Error Occured")
    //     }
        
    //     res.send("User saved")
    // })
})

app.listen(3000,()=>{
    console.log("Server started")
})