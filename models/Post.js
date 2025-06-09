const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [commentSchema],
  timestamp: {
    type: Date,
    default: Date.now
  },
  isRepeated: {
    type: Boolean,
    default: false
  },
  originalPostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }
});

module.exports = mongoose.model('Post', postSchema); 