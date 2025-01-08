const express = require("express");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const projectRoutes = require("./src/routes/projects");
const aboutMeRoutes = require("./src/routes/about_me");

const app = express();

// var corsOptions = {
//   origin: 'http://202.177.41.198:9092',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// Middleware
app.options('*', cors()) // include before other routes

// Enable CORS for specific origin
app.use(cors({
  origin: ['http://202.177.41.198:9092','http://ramannair.asuscomm.com:9092','http://localhost:5173','http://localhost:4173','http://192.168.50.200:9092'], // Allow this origin
  methods: ['GET', 'POST'], // Allow these methods
  credentials: true, // If you need to send cookies or authentication tokens
}));
// app.use(cors(corsOptions)); // Enable CORS
app.use(express.json()); // Parse JSON request body


// Set the directory of your external hard drive (example path)
const externalDrivePath = 'C:/Ayush/Images'; // Change this to your external hard drive's path

// Endpoint to serve the PNG file
app.get('/image/:filename', (req, res) => {
  const imageName = req.params.filename;
  const imagePath = path.join(externalDrivePath,imageName); // Change 'image.png' to the file you want

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      return res.status(404).send('Image not found');
    }
console.log(data);

    const base64Image = Buffer.from(data).toString('base64');
    res.json({ image: base64Image });
  });

  // Check if the file exists
  // fs.access(filePath, fs.constants.F_OK, (err) => {
  //   if (err) {
  //     res.status(404).send('File not found');
  //   } else {
  //     // Set content-type to image/png and send the image file
  //     res.setHeader('Content-Type', 'image/png');
  //     const readStream = fs.createReadStream(filePath);
  //     readStream.pipe(res);
  //   }
  // });
});










app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/project", projectRoutes);
app.use("/api/about_me", aboutMeRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
