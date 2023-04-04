const mongoose = require('mongoose');
const { Schema } = mongoose;


const blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    description: String,
    owner: String,
    views: Number,
    img: String,
    date: { type: Date, default: Date.now }
});


const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;