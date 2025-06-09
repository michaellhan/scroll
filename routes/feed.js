const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const moment = require('moment');

// Get feed with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const posts = await Post.find()
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit);

    // Format timestamps and prepare data for view
    const formattedPosts = posts.map(post => ({
      ...post.toObject(),
      timestamp: moment(post.timestamp).fromNow()
    }));

    res.render('index', {
      title: 'Scroll - Social Media Simulation',
      posts: formattedPosts,
      currentPage: page,
      hasMore: posts.length === limit
    });
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).render('error', {
      message: 'Error loading feed',
      error: process.env.NODE_ENV === 'development' ? error : {}
    });
  }
});

// Like a post
router.post('/:postId/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    post.likes += 1;
    await post.save();
    res.json({ likes: post.likes });
  } catch (error) {
    res.status(500).json({ error: 'Error liking post' });
  }
});

// Add a comment
router.post('/:postId/comment', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    post.comments.push({
      username: req.body.username || 'anonymous',
      text: req.body.text
    });
    
    await post.save();
    res.json({ comments: post.comments });
  } catch (error) {
    res.status(500).json({ error: 'Error adding comment' });
  }
});

module.exports = router; 