const express = require("express");

const app = express();

app.get('/', (req, res)=>{                  // req, res are objects
    // res.send("Hello World")
    // res.send("<h1>Hello World</h1>")            // response header is set
    // res.sendFile(__dirname+"/index.html")
    // res.json({
    //     name:"Yash",
    //     age:24
    // })
    res.end("hi")   //can only send string  Response header is not set in res.send
})

//path-variable: variable inside the URL
// 2 ways to send query parameter and params

//Query Parameter
app.get("/watch", (req, res)=>{
    // console.log(req.query.x);          // req.query is object
    let videoId = req.query.x
    let nId = req.query.y
    res.send("id got "+videoId+" "+nId)
})


//Params
app.get("/watch/:v/video/:n", (req, res)=>{
    console.log(req.params.v)
    console.log(req.params.n)
    res.send("got it !!!!")
})
app.listen(3000, function(){
    console.log("Server started")
});                    