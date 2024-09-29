const mongoose = require("mongoose");
const { Schema } = mongoose;



const categorySchema = new Schema(
    {
        description: { type: String },
        Libelle: { type: String },
    },
    { timestamps: true }
);


const category = mongoose.model("category", categorySchema);

module.exports = category;
