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
            username: 'michi.loop',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx.jpg',
        caption: 'study mode ☕📚',
        timeAgo: '7h ago',
        likes: 142,
        comments: [
            {
                _id: '1',
                author: {
                    username: 'zoe.exe',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'your tabs scare me (respectfully)',
                timeAgo: '6h ago',
                likes: 18
            },
            {
                _id: '2',
                author: {
                    username: 'rinn.ink',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'do you even know what the doc says anymore?',
                timeAgo: '6h ago',
                likes: 12
            }
        ]
    },
    {
        _id: '2',
        author: {
            username: 'kfilm.jpeg',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (1).jpg',
        caption: 'golden hour hits different',
        timeAgo: '6h ago',
        likes: 198,
        comments: [
            {
                _id: '4',
                author: {
                    username: 'haley4evaa',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'i still hear us laughing here',
                timeAgo: '6h ago',
                likes: 24
            },
            {
                _id: '5',
                author: {
                    username: 'zara.sipslow',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'i miss the warmth in this',
                timeAgo: '6h ago',
                likes: 15
            },
            {
                _id: '6',
                author: {
                    username: 'lukewastaken',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'sunset always lies a little',
                timeAgo: '6h ago',
                likes: 19
            }
        ]
    },
    {
        _id: '3',
        author: {
            username: 'soph.scraps',
            profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        },
        image: 'images/Image_fx (2).jpg',
        caption: 'fit check I guess',
        timeAgo: '6h ago',
        likes: 104,
        comments: [
            {
                _id: '7',
                author: {
                    username: 'milo_ondeck',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'mirror again? comforting',
                timeAgo: '6h ago',
                likes: 11
            },
            {
                _id: '8',
                author: {
                    username: 'milliecake99',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'cozy but different cozy',
                timeAgo: '6h ago',
                likes: 8
            }
        ]
    },
    {
        _id: '4',
        author: {
            username: 'milliecake99',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (3).jpg',
        caption: 'made it another year 🎂',
        timeAgo: '5h ago',
        likes: 231,
        comments: [
            {
                _id: '11',
                author: {
                    username: 'kitch.riot',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'save me a piece, liar',
                timeAgo: '5h ago',
                likes: 13
            },
            {
                _id: '12',
                author: {
                    username: 'noraislost',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'that plate is the only constant',
                timeAgo: '5h ago',
                likes: 16
            },
            {
                _id: '13',
                author: {
                    username: 'jamie.crumb',
                    profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
                },
                text: 'happy bday again again again 🎉',
                timeAgo: '5h ago',
                likes: 9
            }
        ]
    },
    {
        _id: '5',
        author: {
            username: 'kitch.riot',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (4).jpg',
        caption: 'worth the mess tbh',
        timeAgo: '5h ago',
        likes: 87,
        comments: [
            {
                _id: '14',
                author: {
                    username: 'bakerbench0',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'mess is the flavor tbh',
                timeAgo: '5h ago',
                likes: 17
            },
            {
                _id: '15',
                author: {
                    username: 'milliecake99',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'looks like chaos, smells like joy',
                timeAgo: '5h ago',
                likes: 12
            }
        ]
    },
    {
        _id: '6',
        author: {
            username: 'milo_ondeck',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (5).jpg',
        caption: 'he owns the place',
        timeAgo: '4h ago',
        likes: 265,
        comments: [
            {
                _id: '16',
                author: {
                    username: 'dan.yawn',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'i\'m jealous of this cat',
                timeAgo: '4h ago',
                likes: 14
            }
        ]
    },
    {
        _id: '7',
        author: {
            username: 'haley4evaa',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (6).jpg',
        caption: 'these ppl >>',
        timeAgo: '4h ago',
        likes: 318,
        comments: [
            {
                _id: '19',
                author: {
                    username: 'kfilm.jpeg',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this light doesn\'t exist anymore',
                timeAgo: '4h ago',
                likes: 13
            },
            {
                _id: '20',
                author: {
                    username: 'hal.dot',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'tag urself i\'m the invisible one',
                timeAgo: '4h ago',
                likes: 17
            },
            {
                _id: '21',
                author: {
                    username: 'soph.scraps',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'can\'t tell if i was there or not',
                timeAgo: '4h ago',
                likes: 10
            }
        ]
    },
    {
        _id: '8',
        author: {
            username: 'rinn.ink',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (7).jpg',
        caption: 'idk if this is helping',
        timeAgo: '3h ago',
        likes: 74,
        comments: [
            {
                _id: '22',
                author: {
                    username: 'michi.loop',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'i see the logic beneath the chaos',
                timeAgo: '3h ago',
                likes: 12
            }
        ]
    },
    {
        _id: '9',
        author: {
            username: 'ethandrivesalone',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (8).jpg',
        caption: 'everything\'s kinda gray today',
        timeAgo: '3h ago',
        likes: 91,
        comments: [
            {
                _id: '25',
                author: {
                    username: 'zara.sipslow',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'same here. different windshield.',
                timeAgo: '3h ago',
                likes: 14
            },
            {
                _id: '26',
                author: {
                    username: 'no.reply',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'this post smells like wet concrete',
                timeAgo: '3h ago',
                likes: 11
            }
        ]
    },
    {
        _id: '10',
        author: {
            username: 'zara.sipslow',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (9).jpg',
        caption: 'same place, new thoughts',
        timeAgo: '2h ago',
        likes: 112,
        comments: [
            {
                _id: '28',
                author: {
                    username: 'kfilm.jpeg',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'this corner is a loop in disguise',
                timeAgo: '2h ago',
                likes: 15
            },
            {
                _id: '29',
                author: {
                    username: 'zoe.exe',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'new thoughts. same lag.',
                timeAgo: '2h ago',
                likes: 12
            }
        ]
    },
    {
        _id: '11',
        author: {
            username: 'noraislost',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (10).jpg',
        caption: 'forgot I liked reading',
        timeAgo: '2h ago',
        likes: 126,
        comments: [
            {
                _id: '31',
                author: {
                    username: 'elise.words',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this hits softer than it should',
                timeAgo: '2h ago',
                likes: 14
            }
        ]
    },
    {
        _id: '12',
        author: {
            username: 'lukewastaken',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (11).jpg',
        caption: 'don\'t worry, I\'m fine',
        timeAgo: '1h ago',
        likes: 97,
        comments: [
            {
                _id: '34',
                author: {
                    username: 'zoe.exe',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'caption\'s glitching again huh',
                timeAgo: '1h ago',
                likes: 11
            },
            {
                _id: '35',
                author: {
                    username: 'rinn.ink',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'the lighting said otherwise',
                timeAgo: '1h ago',
                likes: 9
            }
        ]
    },
    {
        _id: '13',
        author: {
            username: 'zoe.exe',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (12).jpg',
        caption: 'almost like real life lol',
        timeAgo: '1h ago',
        likes: 134,
        comments: [
            {
                _id: '37',
                author: {
                    username: 'dev.incall',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'i\'m the frozen square again 😭',
                timeAgo: '1h ago',
                likes: 13
            }
        ]
    },
    {
        _id: '14',
        author: {
            username: 'lightweekly',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (13).jpg',
        caption: 'peaceful moment',
        timeAgo: '1h ago',
        likes: 83,
        comments: [
            {
                _id: '40',
                author: {
                    username: 'noraislost',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'i want to live here for 30 seconds',
                timeAgo: '1h ago',
                likes: 14
            },
            {
                _id: '41',
                author: {
                    username: 'kai.smokes',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'burn slow. think soft.',
                timeAgo: '1h ago',
                likes: 11
            }
        ]
    },
    {
        _id: '15',
        author: {
            username: 'lin2hallway',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (14).jpg',
        caption: 'we live here more than we live at home',
        timeAgo: '1h ago',
        likes: 109,
        comments: [
            {
                _id: '43',
                author: {
                    username: 'haley4evaa',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'too real i hate how real',
                timeAgo: '1h ago',
                likes: 13
            },
            {
                _id: '44',
                author: {
                    username: 'rinn.ink',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i know this floor by feel',
                timeAgo: '1h ago',
                likes: 10
            },
            {
                _id: '45',
                author: {
                    username: 'michi.loop',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'caption of the semester tbh',
                timeAgo: '1h ago',
                likes: 15
            }
        ]
    },
    {
        _id: '16',
        author: {
            username: 'rinn.ink',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (15).jpg',
        caption: 'I don\'t even remember writing this',
        timeAgo: '47m ago',
        likes: 58,
        comments: [
            {
                _id: '46',
                author: {
                    username: 'kfilm.jpeg',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'that corner doodle is holding the whole braincell',
                timeAgo: '46m ago',
                likes: 12
            },
            {
                _id: '47',
                author: {
                    username: 'lightweekly',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'looks like it\'s thinking for you',
                timeAgo: '46m ago',
                likes: 7
            }
        ]
    },
    {
        _id: '17',
        author: {
            username: 'michi.loop',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (16).jpg',
        caption: 'still here ☕📚',
        timeAgo: '43m ago',
        likes: 81,
        comments: [
            {
                _id: '49',
                author: {
                    username: 'haley4evaa',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'do u ever leave this desk orrrr',
                timeAgo: '42m ago',
                likes: 11
            },
            {
                _id: '50',
                author: {
                    username: 'zara.sipslow',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'same energy diff beverage',
                timeAgo: '42m ago',
                likes: 13
            },
            {
                _id: '51',
                author: {
                    username: 'rinn.ink',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'plant\'s giving up in solidarity',
                timeAgo: '41m ago',
                likes: 9
            }
        ]
    },
    {
        _id: '18',
        author: {
            username: 'soph.scraps',
            profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        },
        image: 'images/Image_fx (17).jpg',
        caption: 'fit check again I guess',
        timeAgo: '39m ago',
        likes: 92,
        comments: [
            {
                _id: '52',
                author: {
                    username: 'lin2hallway',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'mirror\'s tired of seeing you',
                timeAgo: '39m ago',
                likes: 14
            },
            {
                _id: '53',
                author: {
                    username: 'milliecake99',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'same sweater supremacy',
                timeAgo: '38m ago',
                likes: 10
            }
        ]
    },
    {
        _id: '19',
        author: {
            username: 'milo_ondeck',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (18).jpg',
        caption: 'he\'s over it',
        timeAgo: '38m ago',
        likes: 103,
        comments: [
            {
                _id: '55',
                author: {
                    username: 'noraislost',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'he turned his back on us 😔',
                timeAgo: '37m ago',
                likes: 15
            },
            {
                _id: '56',
                author: {
                    username: 'ethandrivesalone',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'he knows things we don\'t',
                timeAgo: '37m ago',
                likes: 14
            },
            {
                _id: '57',
                author: {
                    username: 'catlooped',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'milo said no more content',
                timeAgo: '37m ago',
                likes: 18
            }
        ]
    },
    {
        _id: '20',
        author: {
            username: 'zara.sipslow',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (19).jpg',
        caption: 'same place, same thoughts',
        timeAgo: '34m ago',
        likes: 77,
        comments: [
            {
                _id: '58',
                author: {
                    username: 'lightweekly',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'that leftover latte\'s the mood',
                timeAgo: '33m ago',
                likes: 16
            },
            {
                _id: '59',
                author: {
                    username: 'michi.loop',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'quiet booth, loud mind',
                timeAgo: '33m ago',
                likes: 11
            }
        ]
    },
    {
        _id: '21',
        author: {
            username: 'kfilm.jpeg',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (20).jpg',
        caption: 'maybe it\'s not hitting the same',
        timeAgo: '33m ago',
        likes: 88,
        comments: [
            {
                _id: '61',
                author: {
                    username: 'zoe.exe',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'fogged-out field core',
                timeAgo: '32m ago',
                likes: 13
            },
            {
                _id: '62',
                author: {
                    username: 'haley4evaa',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'sitting that far apart is a vibe',
                timeAgo: '32m ago',
                likes: 10
            }
        ]
    },
    {
        _id: '22',
        author: {
            username: 'noraislost',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (21).jpg',
        caption: 'I didn\'t finish it',
        timeAgo: '33m ago',
        likes: 72,
        comments: [
            {
                _id: '64',
                author: {
                    username: 'rinn.ink',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'same. every book. every time.',
                timeAgo: '32m ago',
                likes: 14
            },
            {
                _id: '65',
                author: {
                    username: 'lin2hallway',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'folded covers always feel like a sigh',
                timeAgo: '31m ago',
                likes: 10
            }
        ]
    },
    {
        _id: '23',
        author: {
            username: 'lin2hallway',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (22).jpg',
        caption: 'I forget what day this was',
        timeAgo: '29m ago',
        likes: 66,
        comments: [
            {
                _id: '67',
                author: {
                    username: 'lukewastaken',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'feels like a Tuesday that never ended',
                timeAgo: '29m ago',
                likes: 12
            },
            {
                _id: '68',
                author: {
                    username: 'soph.scraps',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'hallway energy: sterile confusion',
                timeAgo: '28m ago',
                likes: 9
            },
            {
                _id: '69',
                author: {
                    username: 'haley4evaa',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'i think i saw this flyer last year',
                timeAgo: '28m ago',
                likes: 14
            }
        ]
    },
    {
        _id: '24',
        author: {
            username: 'haley4evaa',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (23).jpg',
        caption: 'this was fun I think?',
        timeAgo: '28m ago',
        likes: 119,
        comments: [
            {
                _id: '70',
                author: {
                    username: 'milliecake99',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'blurry pics hit harder tbh',
                timeAgo: '27m ago',
                likes: 13
            },
            {
                _id: '71',
                author: {
                    username: 'zoe.exe',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'mid-blink guy carrying the vibe',
                timeAgo: '27m ago',
                likes: 11
            },
            {
                _id: '72',
                author: {
                    username: 'kfilm.jpeg',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'same chairs, less joy',
                timeAgo: '27m ago',
                likes: 12
            }
        ]
    },
    {
        _id: '25',
        author: {
            username: 'ethandrivesalone',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (24).jpg',
        caption: 'still gray',
        timeAgo: '24m ago',
        likes: 59,
        comments: [
            {
                _id: '73',
                author: {
                    username: 'rinn.ink',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'traffic light might be the brightest thing in this',
                timeAgo: '24m ago',
                likes: 10
            },
            {
                _id: '74',
                author: {
                    username: 'michi.loop',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'dashboard looks like it gave up too',
                timeAgo: '23m ago',
                likes: 9
            }
        ]
    },
    {
        _id: '26',
        author: {
            username: 'kitch.riot',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (25).jpg',
        caption: 'no mess today',
        timeAgo: '23m ago',
        likes: 41,
        comments: [
            {
                _id: '76',
                author: {
                    username: 'milliecake99',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i miss the flour chaos',
                timeAgo: '23m ago',
                likes: 8
            },
            {
                _id: '77',
                author: {
                    username: 'mari.mixes',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'quiet kitchens scare me a little',
                timeAgo: '22m ago',
                likes: 7
            }
        ]
    },
    {
        _id: '27',
        author: {
            username: 'zoe.exe',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (26).jpg',
        caption: 'everyone\'s tired lately',
        timeAgo: '21m ago',
        likes: 64,
        comments: [
            {
                _id: '79',
                author: {
                    username: 'ethandrivesalone',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'you could hear this image',
                timeAgo: '21m ago',
                likes: 12
            },
            {
                _id: '80',
                author: {
                    username: 'trentafk',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'even the guy who walked away knew it',
                timeAgo: '21m ago',
                likes: 9
            }
        ]
    },
    {
        _id: '28',
        author: {
            username: 'lightweekly',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (27).jpg',
        caption: 'burning through it',
        timeAgo: '20m ago',
        likes: 50,
        comments: [
            {
                _id: '82',
                author: {
                    username: 'zara.sipslow',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i can smell this photo',
                timeAgo: '20m ago',
                likes: 10
            },
            {
                _id: '83',
                author: {
                    username: 'lin2hallway',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this is what 12:09am feels like',
                timeAgo: '20m ago',
                likes: 11
            }
        ]
    },
    {
        _id: '29',
        author: {
            username: 'milliecake99',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (28).jpg',
        caption: 'another year gone already',
        timeAgo: '20m ago',
        likes: 76,
        comments: [
            {
                _id: '85',
                author: {
                    username: 'milo_ondeck',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'crumbling cake, crumbling time',
                timeAgo: '19m ago',
                likes: 10
            },
            {
                _id: '86',
                author: {
                    username: 'jamiecrumb',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'same plate, fewer sprinkles',
                timeAgo: '19m ago',
                likes: 8
            }
        ]
    },
    {
        _id: '30',
        author: {
            username: 'lukewastaken',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (29).jpg',
        caption: 'don\'t worry, I\'m fine',
        timeAgo: '20m ago',
        likes: 44,
        comments: [
            {
                _id: '88',
                author: {
                    username: 'zoe.exe',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'caption check: failed',
                timeAgo: '19m ago',
                likes: 13
            },
            {
                _id: '89',
                author: {
                    username: 'soph.scraps',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this is the vibe version of that tweet',
                timeAgo: '19m ago',
                likes: 11
            },
            {
                _id: '90',
                author: {
                    username: 'ethandrivesalone',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'the sky looks how i feel',
                timeAgo: '19m ago',
                likes: 10
            }
        ]
    },
    {
        _id: '31',
        author: {
            username: 'michi.loop',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (30).jpg',
        caption: 'study mode ☕📚',
        timeAgo: '15m ago',
        likes: 42,
        comments: [
            {
                _id: '91',
                author: {
                    username: 'fay.blinked',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'how many windows open rn fr',
                timeAgo: '14m ago',
                likes: 7
            },
            {
                _id: '92',
                author: {
                    username: 'rinn.ink',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'i used that same highlighter',
                timeAgo: '13m ago',
                likes: 6
            }
        ]
    },
    {
        _id: '32',
        author: {
            username: 'soph.scraps',
            profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        },
        image: 'images/Image_fx (31).jpg',
        caption: 'fit check I guess',
        timeAgo: '15m ago',
        likes: 39,
        comments: [
            {
                _id: '94',
                author: {
                    username: 'milo_ondeck',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'sock still winning',
                timeAgo: '13m ago',
                likes: 8
            },
            {
                _id: '95',
                author: {
                    username: 'jamie.crumb',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'comfort outfit of the year tbh',
                timeAgo: '12m ago',
                likes: 9
            }
        ]
    },
    {
        _id: '33',
        author: {
            username: 'milo_ondeck',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (32).jpg',
        caption: 'he owns the place',
        timeAgo: '15m ago',
        likes: 40,
        comments: [
            {
                _id: '97',
                author: {
                    username: 'kfilm.jpeg',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'cat\'s got seniority here',
                timeAgo: '13m ago',
                likes: 10
            },
            {
                _id: '98',
                author: {
                    username: 'haley4evaa',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'same vibes every post, love him',
                timeAgo: '12m ago',
                likes: 9
            },
            {
                _id: '99',
                author: {
                    username: 'catlooped',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'my king returns',
                timeAgo: '12m ago',
                likes: 12
            }
        ]
    },
    {
        _id: '34',
        author: {
            username: 'ethandrivesalone',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (33).jpg',
        caption: 'gray again',
        timeAgo: '15m ago',
        likes: 27,
        comments: [
            {
                _id: '100',
                author: {
                    username: 'zara.sipslow',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'today, yesterday, tomorrow',
                timeAgo: '14m ago',
                likes: 11
            },
            {
                _id: '101',
                author: {
                    username: 'cloud.here',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'can\'t tell if i\'m moving anymore',
                timeAgo: '13m ago',
                likes: 8
            }
        ]
    },
    {
        _id: '35',
        author: {
            username: 'zara.sipslow',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (34).jpg',
        caption: 'new thoughts',
        timeAgo: '15m ago',
        likes: 35,
        comments: [
            {
                _id: '103',
                author: {
                    username: 'lightweekly',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'these are burnt out thoughts',
                timeAgo: '13m ago',
                likes: 13
            },
            {
                _id: '104',
                author: {
                    username: 'ash.still',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'coffee looks like it gave up',
                timeAgo: '12m ago',
                likes: 9
            }
        ]
    },
    {
        _id: '36',
        author: {
            username: 'lin2hallway',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (35).jpg',
        caption: 'we live here more than we live at home',
        timeAgo: '15m ago',
        likes: 29,
        comments: [
            {
                _id: '106',
                author: {
                    username: 'soph.scraps',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'line that goes hard actually',
                timeAgo: '14m ago',
                likes: 12
            },
            {
                _id: '107',
                author: {
                    username: 'lukewastaken',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'white noise in photo form',
                timeAgo: '13m ago',
                likes: 10
            }
        ]
    },
    {
        _id: '37',
        author: {
            username: 'rinn.ink',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (36).jpg',
        caption: 'idk if this is helping',
        timeAgo: '15m ago',
        likes: 21,
        comments: [
            {
                _id: '109',
                author: {
                    username: 'michi.loop',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'been there. still there.',
                timeAgo: '14m ago',
                likes: 9
            },
            {
                _id: '110',
                author: {
                    username: 'notes404',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'erase. repeat. erase.',
                timeAgo: '13m ago',
                likes: 6
            },
            {
                _id: '111',
                author: {
                    username: 'kira.squares',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'same page different spiral',
                timeAgo: '13m ago',
                likes: 5
            }
        ]
    },
    {
        _id: '38',
        author: {
            username: 'noraislost',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (37).jpg',
        caption: 'forgot I liked reading',
        timeAgo: '15m ago',
        likes: 33,
        comments: [
            {
                _id: '112',
                author: {
                    username: 'zara.sipslow',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'this one kinda hurts',
                timeAgo: '14m ago',
                likes: 10
            },
            {
                _id: '113',
                author: {
                    username: 'ivy.paper',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'what was the book?',
                timeAgo: '12m ago',
                likes: 6
            }
        ]
    },
    {
        _id: '39',
        author: {
            username: 'zoe.exe',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (38).jpg',
        caption: 'still here',
        timeAgo: '15m ago',
        likes: 18,
        comments: [
            {
                _id: '115',
                author: {
                    username: 'cassie.types',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'ghost call energy',
                timeAgo: '13m ago',
                likes: 6
            },
            {
                _id: '116',
                author: {
                    username: 'marnie.rants',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'even the glitches look tired',
                timeAgo: '12m ago',
                likes: 5
            }
        ]
    },
    {
        _id: '40',
        author: {
            username: 'haley4evaa',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (39).jpg',
        caption: 'these ppl >>',
        timeAgo: '15m ago',
        likes: 24,
        comments: [
            {
                _id: '118',
                author: {
                    username: 'lin2hallway',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i\'ve walked through this moment before',
                timeAgo: '14m ago',
                likes: 7
            },
            {
                _id: '119',
                author: {
                    username: 'kfilm.jpeg',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'that chair\'s always empty huh',
                timeAgo: '13m ago',
                likes: 8
            },
            {
                _id: '120',
                author: {
                    username: 'quinn.flynn',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'i\'m behind the blur',
                timeAgo: '13m ago',
                likes: 6
            }
        ]
    },
    {
        _id: '41',
        author: {
            username: 'lightweekly',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (40).jpg',
        caption: 'almost gone',
        timeAgo: '15m ago',
        likes: 22,
        comments: [
            {
                _id: '121',
                author: {
                    username: 'tamar.fade',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'this one feels final',
                timeAgo: '13m ago',
                likes: 8
            },
            {
                _id: '122',
                author: {
                    username: 'zoe.exe',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'everything flickers now',
                timeAgo: '12m ago',
                likes: 6
            }
        ]
    },
    {
        _id: '42',
        author: {
            username: 'milliecake99',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (41).jpg',
        caption: 'made it another year 🎂',
        timeAgo: '15m ago',
        likes: 28,
        comments: [
            {
                _id: '124',
                author: {
                    username: 'dev.clock',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'time\'s fake but cake is real',
                timeAgo: '14m ago',
                likes: 9
            },
            {
                _id: '125',
                author: {
                    username: 'sofi.chews',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this cake\'s seen things',
                timeAgo: '13m ago',
                likes: 7
            }
        ]
    },
    {
        _id: '43',
        author: {
            username: 'kitch.riot',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (42).jpg',
        caption: 'worth the mess tbh',
        timeAgo: '15m ago',
        likes: 19,
        comments: [
            {
                _id: '127',
                author: {
                    username: 'mari.mixes',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'the silence is too clean',
                timeAgo: '14m ago',
                likes: 7
            }
        ]
    },
    {
        _id: '44',
        author: {
            username: 'lukewastaken',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (43).jpg',
        caption: 'don\'t worry, I\'m fine',
        timeAgo: '15m ago',
        likes: 17,
        comments: [
            {
                _id: '130',
                author: {
                    username: 'ella.gone',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i want to believe you',
                timeAgo: '14m ago',
                likes: 6
            },
            {
                _id: '131',
                author: {
                    username: 'mari.down',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'something about the laces',
                timeAgo: '13m ago',
                likes: 5
            },
            {
                _id: '132',
                author: {
                    username: 'rinn.ink',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'don\'t stay up there too long',
                timeAgo: '13m ago',
                likes: 6
            }
        ]
    },
    {
        _id: '45',
        author: {
            username: '',
            profilePic: ''
        },
        image: 'images/Image_fx (44).jpg',
        caption: '',
        timeAgo: '',
        likes: 0,
        comments: []
    }
]; 