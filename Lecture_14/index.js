const { json } = require("body-parser");
const express=require("express");
const fs=require("fs");
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));

app.get("/userData", (req, res)=>{
    fs.readFile("./users.json", "utf-8", function(err, data){
        if(err) res.send(err);
        let allUsers=JSON.parse(data);
        res.json(allUsers);
    })
})

app.post("/addUser", (req, res) => {
    try {
        let { name, username } = req.body;
        let newUser = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            username: username,
            role: "user"
        };
        let allUser = [];
        let data = fs.readFileSync("./users.json", "utf-8");
        if (data) {
            allUser = JSON.parse(data);
        }
        allUser.push(newUser);
        fs.writeFileSync("./users.json", JSON.stringify(allUser));
        // res.json(newUser);
        res.json({
            success: true,
            data: allUser
        })
    } catch (error) {
        // return res.status(500).send("Error: " + error.message);
        return res.json({
            success: false,
            error: "Something went wrong"
        })
    }
});
app.listen(3000, ()=>{
    console.log("Server Started");
})
