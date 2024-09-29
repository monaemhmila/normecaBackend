const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique : true // Add unique constraint
  },
  content: {
    type: String,
    required: true
  },
  images: [String], // Array of image URLs
  pdf: {
    type: String,
  },    // PDF URL
  youtubeLink: {
    type: String,
  } // YouTube video link
} ,
 { timestamps: true }

);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
