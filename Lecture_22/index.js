const express = require("express")
const mongoose = require("mongoose")
const app = express();
const User = require("./model/users");
// const { use } = require("react");
const jwt = require('jsonwebtoken');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
console.log(User)

function isLogin(req, res, next){
    if(!req.headers.authorization){
        return res.json({
            success: false,
            message: "No authorization key provided"
        })
    }
    let token = req.headers.authorization
    console.log(token)
    if(!token){
        return res.json({
            success: false,
            message: "Please login"
        })
    }
    let decode = jwt.verify(token, "Yash")
    console.log(decode)
    if(!decode){
        return res.json({
            success: false,
            message: "Invalid token"
        })
    }
    req.user = decode.user
    next()
}

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server running ok"
    })
})

app.get("/home", isLogin,  (req, res)=>{
    // console.log(req.user)
    let username = req.user.name;
    res.json({
        success: true,
        message: "Welcome " + username
    })
})

//end point for signup --adding new user into database
app.post("/api/users/signup", async (req, res) => {
    try {
        let { name, email, password } = req.body
        let userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.json({
                success: false,
                message: "User already exists with this email, Please login"
            })
        }
        let newUser = new User({
            name: name,
            email: email,
            password: password
        })

        await newUser.save()
        res.json({
            success: true,
            message: "User registered successfully, please login to continue"
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            message: error.message
        })
    }
})

app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body
        let userExist = await User.findOne({ email: email })
        if (!userExist) {
            return res.json({
                success: false,
                message: "User does not exist, Please signup"
            })
        }
        if (userExist.password != password) {
            return res.json({
                success: false,
                message: "Invalid Password, Please try again"
            })
        }
        if (userExist.password == password) {
            let token = jwt.sign({"user": userExist._id}, "Yash")
            return res.json({
                success: true,
                message: "Login successfull", 
                token: token
            })
        }
    } catch (error) {
        console.log(error.message)
        res.json({
            message: error.message
        })
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/blogapp')
    .then(() => console.log("Connected!"))
    .catch((err) => {
        console.log(err.message)
    })

app.listen(3344, (req, res) => {
    console.log("Server is running on port 3344");
})