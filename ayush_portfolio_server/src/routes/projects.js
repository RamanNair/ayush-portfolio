const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const projectFolder = '\\\\rndev01\\C$\\Ayush\\Projects';//"\\\\rndev01\\c$\\Nair\\Data\\Projects" ;//ok

router.get("/", async (req, res) => {
  try {
    const files = fs.readdirSync(projectFolder);
    const projectsArray = [];
    for (const file of files) {
      const jsonData = fs.readFileSync(path.join(projectFolder, file), "utf-8");
      const data = JSON.parse(jsonData);
      projectsArray.push(data);
    }
    res.json(projectsArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while reading the directory.");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const filePath = path.join(projectFolder, req.params.id);
    const jsonData = fs.readFileSync(filePath + ".json", "utf-8");
    const data = JSON.parse(jsonData);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while reading the directory.");
  }
});

module.exports = router;
