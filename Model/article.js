const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    Reference: { type: String },
    Designation: { type: String },
    Categorie: { type: Schema.Types.ObjectId, ref: "category" },
    // Change 'Photo' from a single string to an array of strings
    Photo: [{ type: String }],  // Array of strings to store multiple image URLs or file paths
    description: { type: String }
  },
  { timestamps: true }
);

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
