const Article = require('../Model/article')

exports.addArticle = async (req, res, next) => {
  try {
    const { Reference, Designation, Categorie, description } = req.body;
    
    // Log the incoming file data to ensure they are distinct
    console.log('Files uploaded:', req.files);

    if (req.files && req.files.length > 0) {
      // Collect file paths from uploaded files
      const imagePaths = req.files.map(file => file.path);

      console.log('Image paths:', imagePaths);  // Check if the paths are unique

      // Ensure the images are distinct
      const uniqueImagePaths = [...new Set(imagePaths)];
      if (uniqueImagePaths.length !== imagePaths.length) {
        console.warn('There are duplicate file paths!');
      }

        const newArticle = new Article({
          Reference,
          Designation,
          Categorie,
          Photo: uniqueImagePaths, // Save unique image paths
          description,
        });

      const savedArticle = await newArticle.save();

      res.status(200).json({
        success: true,
        article: savedArticle,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'No images uploaded',
      });
    }
  } catch (err) {
    next(err);
  }
};




exports.updateArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id;
    let updatedData = req.body;

    // If new files are uploaded, update the Photo field with an array of file paths
    if (req.files && req.files.length > 0) {
      updatedData.Photo = req.files.map(file => file.path);  // Use an array of file paths
    }

    const updatedArticle = await Article.findByIdAndUpdate(articleId, updatedData, { new: true });

    if (!updatedArticle) {
      return res.status(404).json({
        success: false,
        error_message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      article: updatedArticle,
    });
  } catch (err) {
    next(err);
  }
};



exports.deleteArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id;

    await Article.findByIdAndDelete(articleId);

    res.status(200).json({
      success: true,
      message: "Article deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.find().populate('Categorie');

    // Ensure 'Photo' is always an array (even if it's a single string)
    articles.forEach(article => {
      if (typeof article.Photo === 'string') {
        article.Photo = [article.Photo];
      }
    });

    res.status(200).json({
      success: true,
      articles: articles,
    });
  } catch (err) {
    next(err);
  }
};

exports.getArticleById = async (req, res, next) => {
  try {
    const articleId = req.params.id;
    const article = await Article.findById(articleId).populate('Categorie');

    if (!article) {
      return res.status(404).json({
        success: false,
        error_message: "Article not found",
      });
    }

    // Ensure 'Photo' is always an array
    if (typeof article.Photo === 'string') {
      article.Photo = [article.Photo];
    }

    res.status(200).json({
      success: true,
      article: article,
    });
  } catch (err) {
    next(err);
  }
};

exports.getFirstFourArticles = async (req, res, next) => {
  try {
    let filter = {};
    if (req.query.categoryId) {
      filter.Categorie = req.query.categoryId;
    }

    const articles = await Article.find(filter)
      .limit(4)
      .populate('Categorie');

    // Ensure 'Photo' is always an array
    articles.forEach(article => {
      if (typeof article.Photo === 'string') {
        article.Photo = [article.Photo];
      }
    });

    res.status(200).json({
      success: true,
      articles: articles,
    });
  } catch (err) {
    next(err);
  }
};



