const express = require("express")
const router = express.Router();
const {m5} = require("../middleware/routerlevel")
router.use(m5)
router.post("/", (req, res)=>{
    res.json({
        success: true,
        message: "User added successfully"
    })
})

router.get("/", (req, res)=>{
    res.json({
        success: true,
        message: "All users data fetched successfully"
    })
})

router.get("/:id", (req, res)=>{
    res.json({
        success: true,
        message: "Single user"
    })
})

module.exports = router