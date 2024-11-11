const express = require('express');
const router = express.Router();
const articleController = require('../Controller/article');

const multer = require("multer");
const path = require("path");

// Multer setup to handle multiple files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);  // Generate a unique filename based on timestamp
  },
});

// Use multer to handle multiple file uploads (up to 10 files with field name 'photos')
const upload = multer({ storage: storage }).array('photos', 10);  // Updated for multiple files

// Route to add a new article with multiple images
router.post('/articles', upload, articleController.addArticle);  // Using 'upload' middleware here

// Route to update an existing article with multiple images
router.put('/articles/:id', upload, articleController.updateArticle);  // Updated for multiple files

// Route to delete an article
router.delete('/articles/:id', articleController.deleteArticle);

// Route to get all articles
router.get('/articles', articleController.getAllArticles);

// Route to get an article by its ID
router.get('/articles/:id', articleController.getArticleById);

// Route to get the first 4 articles (e.g., for preview)
router.get('/firstFourArticles', articleController.getFirstFourArticles);

module.exports = router;
