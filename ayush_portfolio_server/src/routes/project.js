const express = require("express");
const matter = require("gray-matter");
const { marked } = require("marked");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const mdDirectory = "\\\\192.168.50.1\\homestorage\\Ayush Prashant Nair\\ayush-markdown";

// Route to fetch all markdown files and parse them
router.get("/", async (req, res) => {
  console.log("here I am.   r o j...");
  try {
    const files = fs.readdirSync(mdDirectory);
    const projectsArray = [];
    for (const file of files) {
      const parsed = await readAndParseMarkdown(path.join(mdDirectory, file));
      projectsArray.push({
        metadata: parsed.metadata,
        content: parsed.content,
        htmlContent: parsed.htmlContent,
        slug: file,
      });
    }
    res.json(projectsArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while reading the directory.");
  }
});

// Route to fetch and parse a specific markdown file by ID
router.get("/:id", async (req, res) => {
  try {
    const filePath = path.join(mdDirectory, req.params.id);
    const parsed = await readAndParseMarkdown(filePath);
    res.json({
      metadata: parsed.metadata,
      content: parsed.content,
      htmlContent: parsed.htmlContent,
    });
  } catch (error) {
    console.error("Failed to read file:", error);
    res.status(500).send("Failed to read the file.");
  }
});

// Helper function to read and parse markdown files
async function readAndParseMarkdown(filePath) {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");

    // Parse frontmatter with gray-matter
    const { data, content } = matter(rawContent);

    // Parse markdown content to HTML using marked
    const htmlContent = marked(content);

    return {
      title: data.title,
      date: data.date,
      content: content, // Original markdown content
      htmlContent: htmlContent, // HTML converted content
      metadata: data,
    };
  } catch (error) {
    console.error("Error reading or parsing markdown file:", error);
    throw error;
  }
}

module.exports = router;
