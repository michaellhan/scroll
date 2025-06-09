const mongoose = require('mongoose');
const Post = require('./models/Post');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/scroll', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Sample posts data
const posts = [
  {
    username: 'user1',
    profilePic: '/images/profile1.jpg',
    image: '/images/post1.jpg',
    caption: 'First post of the day! #newbeginnings',
    likes: 120,
    comments: [
      { username: 'user2', text: 'Great start!' },
      { username: 'user3', text: 'Love this!' }
    ]
  },
  {
    username: 'user2',
    profilePic: '/images/profile2.jpg',
    image: '/images/post2.jpg',
    caption: 'Beautiful sunset at the beach 🌅',
    likes: 85,
    comments: [
      { username: 'user1', text: 'Stunning view!' }
    ]
  }
];

// Function to populate database
async function populateDB() {
  try {
    // Clear existing posts
    await Post.deleteMany({});
    
    // Insert new posts
    await Post.insertMany(posts);
    
    console.log('Database populated successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error populating database:', error);
    process.exit(1);
  }
}

populateDB(); 