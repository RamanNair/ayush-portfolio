const express = require("express");
const fs = require("fs");
const path = require("path");
const sharp = require('sharp');


const router = express.Router();
const imageFolder = '\\\\rndev01\\C$\\Ayush\\Images' ;//'C:/Ayush/Images';ok 
const projectFolder='\\\\rndev01\\C$\\Ayush\\Projects' ;//"\\\\rndev01\\c$\\Nair\\Data\\Projects" ;//ok

router.get("/", async (req, res) => {
  console.log("here I am NOW....");
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
  console.log("here I am NOW222....");
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


router.get('/resizeimage/:filename', (req, res) => {
  console.log(req.params.filename);
  
  // const imagePath = path.join(__dirname, 'images', req.params.filename);
  const imagePath = path.join(imageFolder, req.params.filename);

  sharp(imagePath)
      .resize(200)  // Resize to reduce file size
      .toFormat('webp')  // Convert to WebP for better compression
      .pipe(res);
});

router.get('/resizeimage800/:filename', (req, res) => {
  console.log(req.params.filename);
  
  // const imagePath = path.join(__dirname, 'images', req.params.filename);
  const imagePath = path.join(imageFolder, req.params.filename);

  sharp(imagePath)
      .resize(800)  // Resize to reduce file size
      .toFormat('webp')  // Convert to WebP for better compression
      .pipe(res);
});
module.exports = router;
