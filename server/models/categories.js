const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    userID: {
        type: String,
        required: true,
        trim: true,
        ref: User
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true 
    }
}) 

const Category = mongoose.model('categories', categoriesSchema);

module.exports = Category;