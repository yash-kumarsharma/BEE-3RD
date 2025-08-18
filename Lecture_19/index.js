//mongodb return and saves data in BSON Binary JSON
//mongoose is odm, to connect our server with mongodb
const express = require("express")
const mongoose = require("mongoose")
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const blogRoute = require("./routes/blogsRoutes")
const userRoute = require("./routes/usersRoutes")
app.use("/api/blogs", blogRoute)
app.use("/api/users", userRoute)


app.listen(4445, () => {
    console.log("Server started")
})


mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log("Connected!"));
