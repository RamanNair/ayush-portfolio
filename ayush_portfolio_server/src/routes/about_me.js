const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const aboutMeFile = "c:\\Nair\\Data\\About_Me\\about_me.json";

router.get("/", async (req, res) => {
  try {
    const jsonData = fs.readFileSync(aboutMeFile, "utf-8");
    const data = JSON.parse(jsonData);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while reading the directory.");
  }
});

module.exports = router;
