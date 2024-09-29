const Article = require('../Model/article')
exports.addArticle = async (req, res, next) => {
  try {
    const {
      Reference,
      Designation,
      Categorie,
      description,

    } = req.body;

    
    console.log()

    const newArticle = new Article({
      Reference,
      Designation,
      Categorie,
      Photo: req.file ? req.file.path : undefined,
      description
    });

    const savedArticle = await newArticle.save();


    res.status(200).json({
      success: true,
      article: newArticle
    });
  } catch (err) {
    next(err);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id;
    let updatedData = req.body;

    // Vérifiez si un fichier a été téléchargé et mettez à jour le champ 'Photo' si nécessaire
    if (req.file) {
      updatedData.Photo = req.file.filename; // Assurez-vous que le champ 'Photo' correspond à votre modèle Article
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      articleId,
      updatedData,
      { new: true }
    );

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
        error_message: "article not found",
      });
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

    res.status(200).json({
      success: true,
      articles: articles,
    });
  } catch (err) {
    next(err);
  }
};



