const express = require('express');
const router = express.Router();
const blogController = require('../Controller/blogs');
const multer = require("multer");
const path = require("path");
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}
const sanitizeFilename = (filename) => {
  return filename.replace(/[^a-z0-9-]/gi, '_').toLowerCase();
};
// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a random unique ID
      const sanitizedTitle = sanitizeFilename(req.body.title);
      const filename = `${sanitizedTitle}-${uniqueId}${ext}`; // Concatenate blog title with unique ID
      console.log('Saving to:', path.join(uploadsDir, filename)); // Debugging log
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
