const express = require('express');
const router = express.Router();
const blogController = require('../Controller/blogs');
const multer = require("multer");
const path = require("path");

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a random unique ID
    const filename = req.body.title.replace(/\s+/g, '-') + '-' + uniqueId + ext; // Concatenate blog title with unique ID
    cb(null, filename);
  },
});

// Multer instance for handling file uploads
const upload = multer({ storage: storage });

// Create a new blog post with optional multiple image and PDF uploads
router.post('/blog', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'pdf', maxCount: 1 }]), blogController.createBlog);

// Delete a blog post
router.delete('/blog/:id', blogController.deleteBlog);

// Get all blog posts
router.get('/blogs', blogController.getAllBlogs);

// Get a blog post by its ID
router.get('/blog/:id', blogController.getSingleBlog);

module.exports = router;
