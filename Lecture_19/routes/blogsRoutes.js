const express = require("express")
const router = express.Router()     // small -----> app

const {postaddBlog, getreadBlog, getOneBlog, deleteOneBlog, putUpdateBlog} = require("../controller/blogController")
router.post("/", postaddBlog)

router.get("/", getreadBlog)

router.get("/:id", getOneBlog)

router.delete("/:blogId", deleteOneBlog)

router.put("/:blogId", putUpdateBlog)

module.exports = router