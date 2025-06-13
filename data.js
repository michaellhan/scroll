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
            username: 'travel_photographer',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
        caption: 'Sunset views from my latest adventure in Bali 🌅 #travelgram #bali',
        timeAgo: '2 hours ago',
        likes: 245,
        comments: [
            {
                _id: '1',
                author: {
                    username: 'wanderlust',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'This is absolutely stunning! Which beach is this?',
                timeAgo: '1 hour ago',
                likes: 12
            }
        ]
    },
    {
        _id: '2',
        author: {
            username: 'foodie_adventures',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
        caption: 'Just discovered this amazing street food spot in Bangkok! The pad thai is to die for 🍜 #foodie #thailand',
        timeAgo: '3 hours ago',
        likes: 189,
        comments: []
    },
    {
        _id: '3',
        author: {
            username: 'tech_insider',
            profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
        },
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
        caption: 'Just got my hands on the latest iPhone! The camera is insane 📱 #tech #apple',
        timeAgo: '5 hours ago',
        likes: 312,
        comments: [
            {
                _id: '2',
                author: {
                    username: 'gadget_guru',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'How\'s the battery life? Thinking of upgrading!',
                timeAgo: '4 hours ago',
                likes: 8
            }
        ]
    },
    {
        _id: '4',
        author: {
            username: 'art_lover',
            profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        },
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
        caption: 'My latest watercolor piece inspired by Japanese gardens 🎨 #art #watercolor',
        timeAgo: '6 hours ago',
        likes: 156,
        comments: []
    },
    {
        _id: '5',
        author: {
            username: 'fitness_motivation',
            profilePic: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=150'
        },
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
        caption: 'New personal best on deadlifts today! 315lbs 💪 #fitness #gymlife',
        timeAgo: '8 hours ago',
        likes: 278,
        comments: [
            {
                _id: '3',
                author: {
                    username: 'gym_buddy',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'That\'s impressive! What\'s your training split?',
                timeAgo: '7 hours ago',
                likes: 15
            }
        ]
    },
    {
        _id: '6',
        author: {
            username: 'book_reviewer',
            profilePic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'
        },
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
        caption: 'Just finished "Project Hail Mary" by Andy Weir. Mind-blowing sci-fi! 📚 #bookstagram #reading',
        timeAgo: '10 hours ago',
        likes: 167,
        comments: []
    }
]; 