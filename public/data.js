// User data
const user = {
    username: 'user1',
    email: 'user1@example.com',
    bio: 'This is my bio'
};

// Posts data
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