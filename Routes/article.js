const express = require('express');
const router = express.Router();
const articleController = require('../Controller/article');

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

router.post('/articles', upload.single('Photo'), articleController.addArticle);

// Mettez à jour l'article avec la possibilité de mettre à jour la photo si elle est fournie
router.put('/articles/:id', upload.single('Photo'), articleController.updateArticle);

router.delete('/articles/:id', articleController.deleteArticle);

// Obtenir tous les articles
router.get('/articles', articleController.getAllArticles);

// Obtenir un article par son ID
router.get('/articles/:id', articleController.getArticleById);

router.get('/firstFourArticles', articleController.getFirstFourArticles);

module.exports = router;
