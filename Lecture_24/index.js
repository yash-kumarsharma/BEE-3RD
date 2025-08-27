//mongodb return and saves data in BSON Binary JSON
//mongoose is odm, to connect our server with mongodb
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const Blogs = require("./model/blog")
const Users = require("./model/user")

const jwt = require("jsonwebtoken")

app.use(express.static(__dirname + "/public"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

function isLogin(req, res, next) {
    if (!req.headers.authorization) {
        return res.json({
            success: false,
            message: "No authorization key provided"
        })
    }
    let token = req.headers.authorization
    if (!token) {
        return res.json({
            success: false,
            message: "Please login"
        })
    }
    let decode = jwt.verify(token, "Yash")
    if (!decode) {
        return res.json({
            success: false,
            message: "Invalid token"
        })
    }
    req.userId = decode.userId
    next()
}

// adding a blog to database
app.post("/blogs",isLogin,  async (req, res) => {
    let { title, body, userId } = req.body
    let userExist = await Users.findById(userId);
    if (userExist) {
        // console.log(title, body);
        // res.send("Got it")
        let newBlog = new Blogs({
            title: title,
            body: body,
            date: Date.now(),
            userId: userId
        })
        userExist.blogs.push(newBlog._id)
        await newBlog.save()
        await userExist.save()

        res.json({
            success: true,
            data: newBlog,
            message: "Blog added successfully"
        })
    }
})

app.post("/users", async (req, res) => {
    let { email, username, password } = req.body

    let newUser = new Users({
        email: email,
        username: username,
        password: password
    })
    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User added successfully"
    })
})

app.post("/users/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let userExist = await Users.findOne({ email: email })
        if (!userExist) {
            return res.json({
                success: false,
                message: "User does not exist, please sign up"
            })
        }
        if (!userExist.password == password) {
            return res.json({
                success: false,
                message: "Invalid Password, please try again"
            })
        }
        if (userExist.password == password) {
            let token = jwt.sign({ "userId": userExist._id }, "Yash")
            return res.json({
                success: true,
                message: "Login successfull",
                token: token
            })
        }
    } catch (error) {
        console.log(error.message)
        return res.json({
            message: error.message
        })
    }
})

// getting all blogs
app.get("/blogs", async (req, res) => {
    let allblog = await Blogs.find();  // returns all data
    res.json({
        success: true,
        data: allblog
    })
})

app.get("/blogs/:id", async (req, res) => {
    let { id } = req.params
    let blog = await Blogs.findOne({ _id: id });
    res.json({
        success: true,
        data: blog
    })
})

app.get("/users", async (req, res) => {
    let allUsers = await Users.find();
    res.json({
        success: true,
        data: allUsers
    })
})

app.get("/users/:id", async (req, res) => {
    let { id } = req.params
    let user = await Users.findOne({ _id: id }).populate("blogs")
    if (user) {
        res.json({
            success: true,
            data: user
        })
    }
})

app.listen(4445, () => {
    console.log("Server started on port 4445")
})

// delete blog

app.delete("/blogs/:blogId", isLogin, async (req, res) => {
    let { blogId } = req.params;
    let { userId } = req.body;

    let blogExist = await Blogs.findById(blogId);
    if (!blogId) return res.json({
        success: false,
        message: "Blog does not exist"
    })
    if (blogExist.userId != userId) return res.json({
        success: false,
        message: "Not allowed to delete"
    })
    await Blogs.findByIdAndDelete(blogId);
    let userExist = await Users.findById(userId);
    let blog = userExist.blogs.filter((id) => id != blogId)
    userExist.blogs = blog
    await userExist.save();
    res.json({
        success: true,
        message: "Blog deleted successfully",
        data: userExist
    })
})

app.put("/blogs/:blogId", isLogin, async (req, res) => {
    let { blogId } = req.params
    let { title, body } = req.body

    let blogExist = await Blogs.findById(blogId)
    if (!blogId) return res.join({
        success: false,
        message: "Blog not found"
    })

    await Blogs.findByIdAndUpdate(blogId, {
        title: title,
        body: body
    })
    res.json({
        success: true,
        message: "Blog Updated Successfully"
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log("Connected!"));


// make user Schema, email, username, password
// add user route, all user get, single user get  /users