const express = require("express");
const cors = require("cors");

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
  origin: ['http://202.177.41.198:9092','http://ramannair.asuscomm.com:9092'], // Allow this origin
  methods: ['GET', 'POST'], // Allow these methods
  credentials: true, // If you need to send cookies or authentication tokens
}));
// app.use(cors(corsOptions)); // Enable CORS
app.use(express.json()); // Parse JSON request body

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
