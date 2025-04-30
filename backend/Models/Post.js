const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String },
  imageUrl: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userID: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userData'
  }]

}, { timestamps: true });


const Post = mongoose.model("Post", postSchema);
module.exports = Post;