const express = require("express")
const router = express.Router()

const {postaddUser, getUsers, getOneUser} = require("../controller/userController")
router.post("/", postaddUser)

router.get("/", getUsers)

router.get("/:id", getOneUser)

module.exports = router