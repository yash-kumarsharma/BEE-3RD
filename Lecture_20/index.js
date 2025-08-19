const express = require('express');
const { m1, m2 } = require('./middleware/firstmiddleware');
// const { m3 }
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(m1);
const userRouter = require("./routes/userRoutes")
// app.use(m2);
app.use("/api/users", userRouter)
app.get('/health', (req, res,next) => {
    console.log("Running controller function")
    next();
    res.json({
        status: "ok",
        message: "Health check successful"
    })
    console.log('after response');
})
app.get("/home",(req,res,next)=>{
    console.log("Running home endpoint.....");
    res.json({
        success:true,
        message:"Welcome to Home page"
    })
})
app.use(m2);


app.listen(5775, () => {
  console.log('Server is running on port 5775');
});

//middleware run in order it is called
//next() and return is not same 
//controller function is also a middleware