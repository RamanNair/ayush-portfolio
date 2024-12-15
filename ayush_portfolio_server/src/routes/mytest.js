const express = require("express");


const router = express.Router();
router.get("/", async (req, res) => {
    console.log("here I am 123....");
    res.send("here I am 123....")
})

module.exports=router;