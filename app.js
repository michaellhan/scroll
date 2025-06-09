const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/scroll', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Set up session store
const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/scroll',
  collection: 'sessions'
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  }
}));

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  // Example posts with placeholder images
  const posts = [
    {
      _id: '1',
      author: {
        username: 'alice',
        name: 'Alice Smith',
        profilePic: 'https://ui-avatars.com/api/?name=Alice+Smith&background=random',
      },
      timeAgo: '2m ago',
      image: 'https://placekitten.com/600/400',
      caption: 'Enjoying a sunny day at the park! 🌞',
      likes: 12,
      comments: [
        {
          _id: 'c1',
          author: {
            username: 'bob',
            name: 'Bob Lee',
            profilePic: 'https://ui-avatars.com/api/?name=Bob+Lee&background=random',
          },
          timeAgo: '1m ago',
          likes: 2,
          text: 'Looks fun!'
        }
      ]
    },
    {
      _id: '2',
      author: {
        username: 'carol',
        name: 'Carol Jones',
        profilePic: 'https://ui-avatars.com/api/?name=Carol+Jones&background=random',
      },
      timeAgo: '10m ago',
      image: 'https://placebear.com/600/400',
      caption: 'Bear with me 🐻',
      likes: 7,
      comments: [
        {
          _id: 'c2',
          author: {
            username: 'alice',
            name: 'Alice Smith',
            profilePic: 'https://ui-avatars.com/api/?name=Alice+Smith&background=random',
          },
          timeAgo: '5m ago',
          likes: 1,
          text: 'Haha, nice one!'
        }
      ]
    },
    {
      _id: '3',
      author: {
        username: 'dave',
        name: 'Dave Kim',
        profilePic: 'https://ui-avatars.com/api/?name=Dave+Kim&background=random',
      },
      timeAgo: '30m ago',
      image: 'https://placehold.co/600x400?text=Post+Image',
      caption: 'Just finished a 5k run! 🏃‍♂️',
      likes: 20,
      comments: []
    },
    {
      _id: '4',
      author: {
        username: 'eve',
        name: 'Eve Lin',
        profilePic: 'https://ui-avatars.com/api/?name=Eve+Lin&background=random',
      },
      timeAgo: '1h ago',
      image: 'https://placehold.co/600x400/eee/333?text=Another+Post',
      caption: 'Working on my project. #grind',
      likes: 5,
      comments: [
        {
          _id: 'c3',
          author: {
            username: 'carol',
            name: 'Carol Jones',
            profilePic: 'https://ui-avatars.com/api/?name=Carol+Jones&background=random',
          },
          timeAgo: '55m ago',
          likes: 0,
          text: 'Good luck!'
        }
      ]
    }
  ];
  res.render('index', { user: { username: 'guest' }, posts });
});

app.post('/login', (req, res) => {
  // Add your login logic here
  // For now, we'll just create a dummy user
  req.session.user = {
    username: 'testuser',
    email: 'test@example.com',
    bio: 'This is a test user',
    profilePic: '/profile.jpg'
  };
  res.redirect('/');
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// API Routes
app.post('/api/posts', (req, res) => {
  // Add your post creation logic here
  res.json({ success: true });
});

app.post('/api/posts/:postId/comments', (req, res) => {
  // Add your comment creation logic here
  res.json({ success: true });
});

app.post('/api/posts/:postId/like', (req, res) => {
  // Add your post like logic here
  res.json({ likes: Math.floor(Math.random() * 100) });
});

app.post('/api/comments/:commentId/like', (req, res) => {
  // Add your comment like logic here
  res.json({ likes: Math.floor(Math.random() * 50) });
});

app.post('/api/posts/:postId/flag', (req, res) => {
  // Add your post flag logic here
  res.json({ success: true });
});

app.post('/api/comments/:commentId/flag', (req, res) => {
  // Add your comment flag logic here
  res.json({ success: true });
});

app.post('/api/posts/:postId/unflag', (req, res) => {
  // Add your post unflag logic here
  res.json({ success: true });
});

app.post('/api/posts/:postId/track', (req, res) => {
  // Add your engagement tracking logic here
  res.json({ success: true });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 