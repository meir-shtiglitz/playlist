const mongoose = require("mongoose");
const Category = require("./categories");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title:{
       type: String,
       required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    src:{
        type: String,
    },
    catID:{
        type: String,
        required: true,
        ref: Category
    },
    imgUrl: {
        type: String,
        required: true
    },
    publish: {
        type: Date,
        required:true
    }
})

const Song = mongoose.model('songs', songSchema);

module.exports = Song;