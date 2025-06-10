const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// Session configuration - using memory store for development
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Add CSRF token to all responses
app.use((req, res, next) => {
  res.locals.csrfToken = req.session.csrfToken || Math.random().toString(36).substring(2);
  req.session.csrfToken = res.locals.csrfToken;
  next();
});

// Verify CSRF token for POST requests
app.use((req, res, next) => {
  if (req.method === 'POST') {
    const csrfToken = req.headers['x-csrf-token'] || req.body._csrf;
    if (!csrfToken || csrfToken !== req.session.csrfToken) {
      return res.status(403).json({ error: 'Invalid CSRF token' });
    }
  }
  next();
});

// Example posts data with diverse content
const posts = [
  {
    _id: '1',
    author: {
      username: 'nature_lover',
      name: 'Nature Explorer',
      profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
    },
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
    caption: 'The beauty of a mountain sunrise never fails to amaze me. 🌄',
    timeAgo: '2 hours ago',
    likes: 245,
    comments: [
      {
        _id: '1',
        author: {
          username: 'traveler',
          name: 'World Traveler',
          profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        text: 'This is absolutely breathtaking! Where is this?',
        timeAgo: '1 hour ago',
        likes: 12
      }
    ]
  },
  {
    _id: '2',
    author: {
      username: 'foodie',
      name: 'Gourmet Chef',
      profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
    },
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    caption: 'Homemade pasta with fresh herbs and truffle oil. Bon appétit! 🍝',
    timeAgo: '3 hours ago',
    likes: 189,
    comments: []
  },
  {
    _id: '3',
    author: {
      username: 'tech_enthusiast',
      name: 'Tech Explorer',
      profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    caption: 'Exploring the future of AI and machine learning. The possibilities are endless! 🤖',
    timeAgo: '5 hours ago',
    likes: 312,
    comments: [
      {
        _id: '2',
        author: {
          username: 'coder',
          name: 'Code Master',
          profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
        },
        text: 'Fascinating! What kind of AI projects are you working on?',
        timeAgo: '4 hours ago',
        likes: 8
      }
    ]
  },
  {
    _id: '4',
    author: {
      username: 'artist',
      name: 'Creative Soul',
      profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
    },
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
    caption: 'New painting in progress. Art is the lie that enables us to realize the truth. 🎨',
    timeAgo: '6 hours ago',
    likes: 156,
    comments: []
  },
  {
    _id: '5',
    author: {
      username: 'fitness_guru',
      name: 'Fitness Coach',
      profilePic: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=150'
    },
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
    caption: 'Morning workout complete! Remember, consistency is key to progress. 💪',
    timeAgo: '8 hours ago',
    likes: 278,
    comments: [
      {
        _id: '3',
        author: {
          username: 'health_nut',
          name: 'Health Enthusiast',
          profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
        },
        text: 'Great motivation! What\'s your workout routine?',
        timeAgo: '7 hours ago',
        likes: 15
      }
    ]
  },
  {
    _id: '6',
    author: {
      username: 'bookworm',
      name: 'Literary Explorer',
      profilePic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'
    },
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
    caption: 'Lost in the pages of a good book. Reading is a conversation with the greatest minds of all time. 📚',
    timeAgo: '10 hours ago',
    likes: 167,
    comments: []
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    user: {
      username: 'user1',
      email: 'user1@example.com',
      bio: 'This is my bio'
    },
    posts: posts
  });
});

// API endpoints for flagging and unflagging posts
app.post('/api/posts/:postId/flag', (req, res) => {
  const postId = req.params.postId;
  const post = posts.find(p => p._id === postId);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  post.flagged = true;
  res.json({ 
    success: true,
    flagged: true,
    message: 'Post flagged successfully'
  });
});

app.post('/api/posts/:postId/unflag', (req, res) => {
  const postId = req.params.postId;
  const post = posts.find(p => p._id === postId);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  post.flagged = false;
  res.json({ 
    success: true,
    flagged: false,
    message: 'Post unflagged successfully'
  });
});

// API endpoints for likes
app.post('/api/posts/:postId/like', (req, res) => {
  const postId = req.params.postId;
  const post = posts.find(p => p._id === postId);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  if (!post.liked) {
    post.likes += 1;
    post.liked = true;
  }
  
  res.json({ 
    success: true,
    likes: post.likes,
    liked: post.liked,
    message: 'Post liked successfully'
  });
});

app.post('/api/posts/:postId/unlike', (req, res) => {
  const postId = req.params.postId;
  const post = posts.find(p => p._id === postId);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  if (post.liked) {
    post.likes = Math.max(0, post.likes - 1);
    post.liked = false;
  }
  
  res.json({ 
    success: true,
    likes: post.likes,
    liked: post.liked,
    message: 'Post unliked successfully'
  });
});

// API endpoints for comments
app.post('/api/posts/:postId/comments', (req, res) => {
  const postId = req.params.postId;
  const { text } = req.body;
  const post = posts.find(p => p._id === postId);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  if (!text) {
    return res.status(400).json({ error: 'Comment text is required' });
  }
  
  const newComment = {
    _id: Date.now().toString(),
    author: {
      username: 'user1',
      name: 'Current User',
      profilePic: '/images/profile/profile.jpg'
    },
    text: text,
    timeAgo: 'Just now',
    likes: 0
  };
  
  post.comments.push(newComment);
  res.json({ 
    success: true,
    comment: newComment,
    message: 'Comment added successfully'
  });
});

// API endpoints for comment likes
app.post('/api/comments/:commentId/like', (req, res) => {
  const commentId = req.params.commentId;
  let foundComment = null;
  let foundPost = null;
  
  // Find the comment in any post
  for (const post of posts) {
    const comment = post.comments.find(c => c._id === commentId);
    if (comment) {
      foundComment = comment;
      foundPost = post;
      break;
    }
  }
  
  if (!foundComment) {
    return res.status(404).json({ error: 'Comment not found' });
  }
  
  foundComment.likes += 1;
  res.json({ 
    success: true,
    likes: foundComment.likes,
    message: 'Comment liked successfully'
  });
});

app.post('/api/comments/:commentId/unlike', (req, res) => {
  const commentId = req.params.commentId;
  let foundComment = null;
  let foundPost = null;
  
  // Find the comment in any post
  for (const post of posts) {
    const comment = post.comments.find(c => c._id === commentId);
    if (comment) {
      foundComment = comment;
      foundPost = post;
      break;
    }
  }
  
  if (!foundComment) {
    return res.status(404).json({ error: 'Comment not found' });
  }
  
  foundComment.likes = Math.max(0, foundComment.likes - 1);
  res.json({ 
    success: true,
    likes: foundComment.likes,
    message: 'Comment unliked successfully'
  });
});

// Update the server listening configuration
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Export the Express app for Vercel
module.exports = app; 