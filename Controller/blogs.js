const Blog = require('../Model/blogs');


exports.createBlog = async (req, res) => {
  try {
    const { title, content, youtubeLink } = req.body;

    // Handle images
    let images = [];
    if (req.files && req.files.images) {
      if (Array.isArray(req.files.images)) {
        // If multiple images are uploaded
        images = req.files.images.map(file => file.filename);
      } else {
        // If only one image is uploaded
        images.push(req.files.images.filename);
      }
    }

    // Handle PDF
    let pdf = null;
    if (req.files && req.files.pdf && req.files.pdf.length > 0) {
      pdf = req.files.pdf[0].filename;
    }

    const newBlog = new Blog({
      title,
      content,
      images,
      pdf,
      youtubeLink
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    if (err.code === 11000 && err.keyPattern && err.keyPattern.title === 1) {
      // Duplicate key error, title is not unique
      return res.status(400).json({ message: 'Blog title must be unique' });
    }
    res.status(400).json({ message: err.message });
  }
};


exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    await blog.remove();
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
