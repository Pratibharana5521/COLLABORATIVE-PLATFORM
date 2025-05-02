const { required } = require("joi");
const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String },
  imageUrl: { type: String },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });


const Post = mongoose.model("Post", postSchema);
module.exports = Post;