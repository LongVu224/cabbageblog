const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    blogImg: [
        {type: String}
    ],
    title: String,
    tag: String,
    text: String,
    date: String,
    /*collections: [
        {
            type: String,
            ref: "Collection"
        }
    ]*/
}, {
    collection: 'blogs'
})

module.exports = mongoose.model('Blogs', blogSchema)