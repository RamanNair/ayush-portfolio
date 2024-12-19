const express = require("express");
const matter = require("gray-matter");
const { marked } = require("marked");
const fs = require("fs");
const path = require("path");


const router = express.Router();
// const mdDirectory = "\\\\192.168.50.1\\homestorage\\Ayush Prashant Nair\\ayush-markdown";

// const dataFilesDirectory = "c:\Nair\Data\Projects";
 const dataFilesDirectory="\\\\rndev01\\c$\\Nair\\Data\\Projects" ;//ok
//  const dataFilesDirectory="S:\\Data\\Projects"
// const dataFilesDirectory="\\\\S:\\Data\\Projects"
// const dataFilesDirectory="\\192.168.50.1\homestorage\Ayush Prashant Nair\Data\Projects"

// let xx=path.join('192.168.50.1','homestorage','Ayush Prashant Nair','Data','Projects', file);
router.get("/", async (req, res) => {
  console.log("here I am NOW....");
  try {
    const files = fs.readdirSync(dataFilesDirectory);
    const projectsArray = [];
    for (const file of files) {
      const jsonData = fs.readFileSync(path.join(dataFilesDirectory, file), "utf-8");
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
  console.log("here I am NOW222....");
  try {
    const filePath = path.join(dataFilesDirectory, req.params.id);
    const jsonData = fs.readFileSync(filePath + ".json", "utf-8");
    const data = JSON.parse(jsonData);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while reading the directory.");
  }
});

module.exports = router;
