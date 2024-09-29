const mongoose = require("mongoose");
const { Schema } = mongoose;



const adminSchema = new Schema(
    {
        email: { type: String },
        password: { type: String },
        role : {type: String}
   

    },
    { timestamps: true }
);


const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
