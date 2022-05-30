const express = require("express")
const router = express.Router()

router.get("/info", (req, res, next) => {
    console.log(req.query)
    res.send("API is working properly")
})

router.post("/post", (req, res, next) => {
    console.log(req.body)
    res.send("Recieved ")
})

module.exports = router