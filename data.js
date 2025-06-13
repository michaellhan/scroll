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
            username: 'michelle.l',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx.jpg',
        caption: 'study mode ☕📚',
        timeAgo: '2 hours ago',
        likes: 142,
        comments: [
            {
                _id: '1',
                author: {
                    username: 'nina.draws',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'the setup is so aesthetic omg',
                timeAgo: '1 hour ago',
                likes: 22
            },
            {
                _id: '2',
                author: {
                    username: 'jaycodes',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'is that the same doc from last week lol',
                timeAgo: '1 hour ago',
                likes: 16
            },
            {
                _id: '3',
                author: {
                    username: 'vi_reads',
                    profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
                },
                text: 'this makes me want to be productive',
                timeAgo: '1 hour ago',
                likes: 34
            }
        ]
    },
    {
        _id: '2',
        author: {
            username: 'kevin.jiang',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (1).jpg',
        caption: 'golden hour hits different',
        timeAgo: '3 hours ago',
        likes: 198,
        comments: [
            {
                _id: '4',
                author: {
                    username: 'diana.m_',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'this is giving movie scene',
                timeAgo: '2 hours ago',
                likes: 45
            },
            {
                _id: '5',
        author: {
                    username: 'aaron.loop',
            profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
        },
                text: 'I miss that day fr',
                timeAgo: '2 hours ago',
                likes: 29
            },
            {
                _id: '6',
                author: {
                    username: 'livvy.px',
                    profilePic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'
                },
                text: 'can I steal this for my lockscreen',
                timeAgo: '2 hours ago',
                likes: 38
            }
        ]
    },
    {
        _id: '3',
        author: {
            username: 'sophiawrites',
            profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        },
        image: 'images/Image_fx (2).jpg',
        caption: 'fit check I guess',
        timeAgo: '4 hours ago',
        likes: 104,
        comments: [
            {
                _id: '7',
                author: {
                    username: 'tia.in.ink',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'comfy core 🔥',
                timeAgo: '3 hours ago',
                likes: 12
            },
            {
                _id: '8',
                author: {
                    username: 'ryan.snaps',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'mirror is so clean tho??',
                timeAgo: '3 hours ago',
                likes: 18
            },
            {
                _id: '9',
                author: {
                    username: 'cait.typing',
                    profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
                },
                text: 'ur room is so cozy omg',
                timeAgo: '3 hours ago',
                likes: 25
            }
        ]
    },
    {
        _id: '4',
        author: {
            username: 'amelia.bday',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (3).jpg',
        caption: 'made it another year 🎂',
        timeAgo: '5 hours ago',
        likes: 231,
        comments: [
            {
                _id: '10',
                author: {
                    username: 'max.thoughts',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'happy birthday!!! 🎉',
                timeAgo: '4 hours ago',
                likes: 52
            },
            {
                _id: '11',
                author: {
                    username: 'sasha.frame',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'save me a piece 👀',
                timeAgo: '4 hours ago',
                likes: 19
            },
            {
                _id: '12',
                author: {
                    username: 'niko.gtr',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'love that plate lol',
                timeAgo: '4 hours ago',
                likes: 8
            }
        ]
    },
    {
        _id: '5',
        author: {
            username: 'chef.lee',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (4).jpg',
        caption: 'worth the mess tbh',
        timeAgo: '6 hours ago',
        likes: 87,
        comments: [
            {
                _id: '13',
                author: {
                    username: 'gracieeats',
            profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        },
                text: 'this is how you KNOW it\'s gonna be good',
                timeAgo: '5 hours ago',
                likes: 33
            },
            {
                _id: '14',
                author: {
                    username: 'ben.knives',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'I feel like I can smell this post',
                timeAgo: '5 hours ago',
                likes: 11
            },
            {
                _id: '15',
                author: {
                    username: 'iris.kat',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'show the cookies tho 👀',
                timeAgo: '5 hours ago',
                likes: 15
            }
        ]
    },
    {
        _id: '6',
        author: {
            username: 'julesandmilo',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (5).jpg',
        caption: 'he owns the place',
        timeAgo: '7 hours ago',
        likes: 265,
        comments: [
            {
                _id: '16',
                author: {
                    username: 'pet.pixel',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'as he should 👑',
        timeAgo: '6 hours ago',
                likes: 39
    },
    {
                _id: '17',
        author: {
                    username: 'dan.yawn',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'I want his life fr',
                timeAgo: '6 hours ago',
                likes: 27
            },
            {
                _id: '18',
                author: {
                    username: 'sienna.bug',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'this is art',
                timeAgo: '6 hours ago',
                likes: 33
            }
        ]
    },
    {
        _id: '7',
        author: {
            username: 'haleygroupchat',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (6).jpg',
        caption: 'these ppl >>',
        timeAgo: '8 hours ago',
        likes: 318,
        comments: [
            {
                _id: '19',
                author: {
                    username: 'leo.camera',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this day was underrated 🔥',
                timeAgo: '7 hours ago',
                likes: 26
            },
            {
                _id: '20',
                author: {
                    username: 'tina.cloud',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'I love this group sm',
                timeAgo: '7 hours ago',
                likes: 34
            },
            {
                _id: '21',
                author: {
                    username: 'jamessays',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'tag urself I\'m the one dropping the ice cream',
                timeAgo: '7 hours ago',
                likes: 41
            }
        ]
    },
    {
        _id: '8',
        author: {
            username: 'notes.by.rin',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (7).jpg',
        caption: 'idk if this is helping',
        timeAgo: '9 hours ago',
        likes: 74,
        comments: [
            {
                _id: '22',
                author: {
                    username: 'carla.inks',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'it looks like a conspiracy theory but I get it',
                timeAgo: '8 hours ago',
                likes: 17
            },
            {
                _id: '23',
                author: {
                    username: 'syd.sketches',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'this is how my brain looks',
                timeAgo: '8 hours ago',
                likes: 23
            },
            {
                _id: '24',
                author: {
                    username: 'xavier.notes',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'same layout I used for calc lmao',
                timeAgo: '8 hours ago',
                likes: 12
            }
        ]
    },
    {
        _id: '9',
        author: {
            username: 'ethan.drives',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (8).jpg',
        caption: 'everything\'s kinda gray today',
        timeAgo: '10 hours ago',
        likes: 91,
        comments: [
            {
                _id: '25',
                author: {
                    username: 'noah.road',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this mood is too real',
                timeAgo: '9 hours ago',
                likes: 30
            },
            {
                _id: '26',
                author: {
                    username: 'emmy.whispers',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'feels like the opening to a sad indie movie',
                timeAgo: '9 hours ago',
                likes: 26
            },
            {
                _id: '27',
                author: {
                    username: 'breeee.42',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'raincore aesthetic 🌧️',
                timeAgo: '9 hours ago',
                likes: 18
            }
        ]
    },
    {
        _id: '10',
        author: {
            username: 'zara.sips',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (9).jpg',
        caption: 'same place, new thoughts',
        timeAgo: '11 hours ago',
        likes: 112,
        comments: [
            {
                _id: '28',
                author: {
                    username: 'milo.audible',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'this post smells like cinnamon',
                timeAgo: '10 hours ago',
                likes: 22
            },
            {
                _id: '29',
                author: {
                    username: 'hannah.doodles',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'I always think better in cafes too',
                timeAgo: '10 hours ago',
                likes: 15
            },
            {
                _id: '30',
                author: {
                    username: 'li.journal',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'cute mug!!',
                timeAgo: '10 hours ago',
                likes: 12
            }
        ]
    },
    {
        _id: '11',
        author: {
            username: 'bookish.nora',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (10).jpg',
        caption: 'forgot I liked reading',
        timeAgo: '12 hours ago',
        likes: 126,
        comments: [
            {
                _id: '31',
                author: {
                    username: 'elise.words',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this hits',
                timeAgo: '11 hours ago',
                likes: 14
            },
            {
                _id: '32',
                author: {
                    username: 'markpage',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'what book tho 👀',
                timeAgo: '11 hours ago',
                likes: 19
            },
            {
                _id: '33',
                author: {
                    username: 'amy.reviews',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'you always pick the prettiest lighting',
                timeAgo: '11 hours ago',
                likes: 21
            }
        ]
    },
    {
        _id: '12',
        author: {
            username: 'luke.up.there',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (11).jpg',
        caption: 'don\'t worry, I\'m fine',
        timeAgo: '13 hours ago',
        likes: 97,
        comments: [
            {
                _id: '34',
                author: {
                    username: 'isaacsteps',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'same caption as my inner voice',
                timeAgo: '12 hours ago',
                likes: 28
            },
            {
                _id: '35',
                author: {
                    username: 'raya.sun',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'the lighting is oddly perfect for this',
                timeAgo: '12 hours ago',
                likes: 14
            },
            {
                _id: '36',
                author: {
                    username: 'toma.looks',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'this post is a vibe and a cry for help',
                timeAgo: '12 hours ago',
                likes: 31
            }
        ]
    },
    {
        _id: '13',
        author: {
            username: 'virtual.zoe',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (12).jpg',
        caption: 'almost like real life lol',
        timeAgo: '14 hours ago',
        likes: 134,
        comments: [
            {
                _id: '37',
                author: {
                    username: 'cassie.types',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'honestly miss this chaos',
                timeAgo: '13 hours ago',
                likes: 23
            },
            {
                _id: '38',
                author: {
                    username: 'dev.incall',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'I\'m the square that\'s frozen 😭',
                timeAgo: '13 hours ago',
                likes: 18
            },
            {
                _id: '39',
                author: {
                    username: 'marnie.rants',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'remember the quizlet tab tho 💀',
                timeAgo: '13 hours ago',
                likes: 33
            }
        ]
    },
    {
        _id: '14',
        author: {
            username: 'light.this.week',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (13).jpg',
        caption: 'peaceful moment',
        timeAgo: '15 hours ago',
        likes: 83,
        comments: [
            {
                _id: '40',
                author: {
                    username: 'kai.smokes',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'you post like a poem',
                timeAgo: '14 hours ago',
                likes: 25
            },
            {
                _id: '41',
                author: {
                    username: 'elena.dreams',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'I needed this today',
                timeAgo: '14 hours ago',
                likes: 21
            },
            {
                _id: '42',
                author: {
                    username: 'ro.ro',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'I want to live in this frame',
                timeAgo: '14 hours ago',
                likes: 19
            }
        ]
    },
    {
        _id: '15',
        author: {
            username: 'lin.lockers',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (14).jpg',
        caption: 'we live here more than we live at home',
        timeAgo: '16 hours ago',
        likes: 109,
        comments: [
            {
                _id: '43',
                author: {
                    username: 'megs.sch',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'ugh this is too real',
                timeAgo: '15 hours ago',
                likes: 27
            },
            {
                _id: '44',
                author: {
                    username: 'kyle.yrn',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'caption of the semester',
                timeAgo: '15 hours ago',
                likes: 31
            },
            {
                _id: '45',
                author: {
                    username: 'jena.routes',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'I know this exact hallway smell',
                timeAgo: '15 hours ago',
                likes: 15
            }
        ]
    },
    {
        _id: '16',
        author: {
            username: 'notes.by.rin',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (15).jpg',
        caption: 'I don\'t even remember writing this',
        timeAgo: '17 hours ago',
        likes: 58,
        comments: [
            {
                _id: '46',
                author: {
                    username: 'keiko.42',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'that corner\'s kinda deep ngl',
                timeAgo: '16 hours ago',
                likes: 14
            },
            {
                _id: '47',
                author: {
                    username: 'alex.wired',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'same handwriting as my dream journal',
                timeAgo: '16 hours ago',
                likes: 7
            },
            {
                _id: '48',
                author: {
                    username: 'grace.glow',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'I feel like I\'ve seen this before??',
                timeAgo: '16 hours ago',
                likes: 19
            }
        ]
    },
    {
        _id: '17',
        author: {
            username: 'michelle.l',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (16).jpg',
        caption: 'still here ☕📚',
        timeAgo: '18 hours ago',
        likes: 81,
        comments: [
            {
                _id: '49',
                author: {
                    username: 'daniel.lines',
                    profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
                },
                text: 'you\'re in the same spot lol',
                timeAgo: '17 hours ago',
                likes: 11
            },
            {
                _id: '50',
                author: {
                    username: 'hannah.codes',
                    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
                },
                text: 'I respect the grind (and the plant)',
                timeAgo: '17 hours ago',
                likes: 16
            },
            {
                _id: '51',
                author: {
                    username: 'sunil.up',
                    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
                },
                text: 'study loop engaged',
                timeAgo: '17 hours ago',
                likes: 9
            }
        ]
    },
    {
        _id: '18',
        author: {
            username: 'sophiawrites',
            profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        },
        image: 'images/Image_fx (17).jpg',
        caption: 'fit check again I guess',
        timeAgo: '19 hours ago',
        likes: 92,
        comments: [
            {
                _id: '52',
                author: {
                    username: 'megan.irl',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'this one\'s giving tired but cute',
                timeAgo: '18 hours ago',
                likes: 12
            },
            {
                _id: '53',
                author: {
                    username: 'ronn.print',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'same fit or same vibe??',
                timeAgo: '18 hours ago',
                likes: 17
            },
            {
                _id: '54',
                author: {
                    username: 'val.snap',
                    profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
                },
                text: 'this caption feels familiar 😳',
                timeAgo: '18 hours ago',
                likes: 14
            }
        ]
    },
    {
        _id: '19',
        author: {
            username: 'julesandmilo',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (18).jpg',
        caption: 'he\'s over it',
        timeAgo: '20 hours ago',
        likes: 103,
        comments: [
            {
                _id: '55',
                author: {
                    username: 'catlooped',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'milo\'s in his villain arc',
                timeAgo: '19 hours ago',
                likes: 22
            },
            {
                _id: '56',
                author: {
                    username: 'em.down',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'even the cat is tired',
                timeAgo: '19 hours ago',
                likes: 18
            },
            {
                _id: '57',
                author: {
                    username: 'tash.light',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'still better content than most of my feed tbh',
                timeAgo: '19 hours ago',
                likes: 20
            }
        ]
    },
    {
        _id: '20',
        author: {
            username: 'zara.sips',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (19).jpg',
        caption: 'same place, same thoughts',
        timeAgo: '21 hours ago',
        likes: 77,
        comments: [
            {
                _id: '58',
                author: {
                    username: 'jeff.reads',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'caption of the month',
                timeAgo: '20 hours ago',
                likes: 15
            },
            {
                _id: '59',
                author: {
                    username: 'naomi.tree',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'I\'ve been here too long',
                timeAgo: '20 hours ago',
                likes: 19
            },
            {
                _id: '60',
                author: {
                    username: 'ben.wav',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'looping irl',
                timeAgo: '20 hours ago',
                likes: 11
            }
        ]
    },
    {
        _id: '21',
        author: {
            username: 'kevin.jiang',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (20).jpg',
        caption: 'maybe it\'s not hitting the same',
        timeAgo: '22 hours ago',
        likes: 88,
        comments: [
            {
                _id: '61',
                author: {
                    username: 'samir.23',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'nah this is kind of eerie',
                timeAgo: '21 hours ago',
                likes: 17
            },
            {
                _id: '62',
                author: {
                    username: 'andrea.flux',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'still pretty but less warm',
                timeAgo: '21 hours ago',
                likes: 21
            },
            {
                _id: '63',
                author: {
                    username: 'sasha.wind',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'something changed',
                timeAgo: '21 hours ago',
                likes: 14
            }
        ]
    },
    {
        _id: '22',
        author: {
            username: 'bookish.nora',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (21).jpg',
        caption: 'I didn\'t finish it',
        timeAgo: '23 hours ago',
        likes: 72,
        comments: [
            {
                _id: '64',
                author: {
                    username: 'lucas.books',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'me with everything lately tbh',
                timeAgo: '22 hours ago',
                likes: 19
            },
            {
                _id: '65',
                author: {
                    username: 'ivy.paper',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'mood but make it aesthetic',
                timeAgo: '22 hours ago',
                likes: 22
            },
            {
                _id: '66',
                author: {
                    username: 'juliet.calm',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'same book?',
                timeAgo: '22 hours ago',
                likes: 11
            }
        ]
    },
    {
        _id: '23',
        author: {
            username: 'lin.lockers',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (22).jpg',
        caption: 'I forget what day this was',
        timeAgo: '24 hours ago',
        likes: 66,
        comments: [
            {
                _id: '67',
                author: {
                    username: 'hal.dot',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'every hallway looks the same now',
                timeAgo: '23 hours ago',
                likes: 16
            },
            {
                _id: '68',
                author: {
                    username: 'oscar.late',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this caption hit harder than expected',
                timeAgo: '23 hours ago',
                likes: 21
            },
            {
                _id: '69',
                author: {
                    username: 'yves.wandering',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'liminal core',
                timeAgo: '23 hours ago',
                likes: 12
            }
        ]
    },
    {
        _id: '24',
        author: {
            username: 'haleygroupchat',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (23).jpg',
        caption: 'this was fun I think?',
        timeAgo: '25 hours ago',
        likes: 119,
        comments: [
            {
                _id: '70',
                author: {
                    username: 'quinn.flynn',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'can\'t tell if this was last week or last year',
                timeAgo: '24 hours ago',
                likes: 20
            },
            {
                _id: '71',
                author: {
                    username: 'fran.codes',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'I remember not remembering this',
                timeAgo: '24 hours ago',
                likes: 14
            },
            {
                _id: '72',
                author: {
                    username: 'leo.camera',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'same chairs… different energy',
                timeAgo: '24 hours ago',
                likes: 18
            }
        ]
    },
    {
        _id: '25',
        author: {
            username: 'ethan.drives',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (24).jpg',
        caption: 'still gray',
        timeAgo: '26 hours ago',
        likes: 59,
        comments: [
            {
                _id: '73',
                author: {
                    username: 'drip.miles',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'even your sky\'s tired',
                timeAgo: '25 hours ago',
                likes: 17
            },
            {
                _id: '74',
                author: {
                    username: 'aria.tires',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'love a good grayscale mood',
                timeAgo: '25 hours ago',
                likes: 13
            },
            {
                _id: '75',
                author: {
                    username: 'nicole.plays',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'copy-paste vibes',
                timeAgo: '25 hours ago',
                likes: 15
            }
        ]
    },
    {
        _id: '26',
        author: {
            username: 'chef.lee',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (25).jpg',
        caption: 'no mess today',
        timeAgo: '27 hours ago',
        likes: 41,
        comments: [
            {
                _id: '76',
                author: {
                    username: 'baker.benji',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'where\'s the chaos 😢',
                timeAgo: '26 hours ago',
                likes: 9
            },
            {
                _id: '77',
                author: {
                    username: 'kiki.mess',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this feels off',
                timeAgo: '26 hours ago',
                likes: 13
            },
            {
                _id: '78',
                author: {
                    username: 'mari.mixes',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'silent sequel to a loud post',
                timeAgo: '26 hours ago',
                likes: 11
            }
        ]
    },
    {
        _id: '27',
        author: {
            username: 'virtual.zoe',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (26).jpg',
        caption: 'everyone\'s tired lately',
        timeAgo: '28 hours ago',
        likes: 64,
        comments: [
            {
                _id: '79',
                author: {
                    username: 'lucy.is.online',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'zoom fatigue in a screenshot',
                timeAgo: '27 hours ago',
                likes: 22
            },
            {
                _id: '80',
                author: {
                    username: 'trent.muted',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'where did everyone go?',
                timeAgo: '27 hours ago',
                likes: 18
            },
            {
                _id: '81',
                author: {
                    username: 'kara.rec',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'even the boxes feel lonely',
                timeAgo: '27 hours ago',
                likes: 12
            }
        ]
    },
    {
        _id: '28',
        author: {
            username: 'light.this.week',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (27).jpg',
        caption: 'burning through it',
        timeAgo: '29 hours ago',
        likes: 50,
        comments: [
            {
                _id: '82',
                author: {
                    username: 'echo.dreamt',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'this post feels like sunday night',
                timeAgo: '28 hours ago',
                likes: 24
            },
            {
                _id: '83',
                author: {
                    username: 'nina.ash',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'you okay?',
                timeAgo: '28 hours ago',
                likes: 10
            },
            {
                _id: '84',
                author: {
                    username: 'tamar.fade',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'this is quiet pain',
                timeAgo: '28 hours ago',
                likes: 15
            }
        ]
    },
    {
        _id: '29',
        author: {
            username: 'amelia.bday',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (28).jpg',
        caption: 'another year gone already',
        timeAgo: '30 hours ago',
        likes: 76,
        comments: [
            {
                _id: '85',
                author: {
                    username: 'dev.clock',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'ouch but yes',
                timeAgo: '29 hours ago',
                likes: 19
            },
            {
                _id: '86',
                author: {
                    username: 'sofi.chews',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'at least the cake still slaps',
                timeAgo: '29 hours ago',
                likes: 14
            },
            {
                _id: '87',
                author: {
                    username: 'jamie.crumb',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'same plate, different mood',
                timeAgo: '29 hours ago',
                likes: 12
            }
        ]
    },
    {
        _id: '30',
        author: {
            username: 'luke.up.there',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (29).jpg',
        caption: 'don\'t worry, I\'m fine',
        timeAgo: '31 hours ago',
        likes: 44,
        comments: [
            {
                _id: '88',
                author: {
                    username: 'ella.gone',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'this is looping now right?',
                timeAgo: '30 hours ago',
                likes: 21
            },
            {
                _id: '89',
                author: {
                    username: 'keith.hollow',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'caption\'s still lying',
                timeAgo: '30 hours ago',
                likes: 18
            },
            {
                _id: '90',
                author: {
                    username: 'mari.down',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'you okay up there?',
                timeAgo: '30 hours ago',
                likes: 14
            }
        ]
    },
    {
        _id: '31',
        author: {
            username: 'michelle.l',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (30).jpg',
        caption: 'study mode ☕📚',
        timeAgo: '32 hours ago',
        likes: 42,
        comments: [
            {
                _id: '91',
                author: {
                    username: 'dani.texts',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'wait is this the same pic?',
                timeAgo: '31 hours ago',
                likes: 11
            },
            {
                _id: '92',
                author: {
                    username: 'erica.rows',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'we\'re looping right',
                timeAgo: '31 hours ago',
                likes: 8
            },
            {
                _id: '93',
                author: {
                    username: 'reid.going',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'i feel weird looking at this',
                timeAgo: '31 hours ago',
                likes: 14
            }
        ]
    },
    {
        _id: '32',
        author: {
            username: 'sophiawrites',
            profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
        },
        image: 'images/Image_fx (31).jpg',
        caption: 'fit check I guess',
        timeAgo: '33 hours ago',
        likes: 39,
        comments: [
            {
                _id: '94',
                author: {
                    username: 'megan.irl',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'you already posted this',
                timeAgo: '32 hours ago',
                likes: 12
            },
            {
                _id: '95',
                author: {
                    username: 'ronn.print',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'i thought this was from last week',
                timeAgo: '32 hours ago',
                likes: 9
            },
            {
                _id: '96',
                author: {
                    username: 'juli.mirrors',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'what\'s different?',
                timeAgo: '32 hours ago',
                likes: 10
            }
        ]
    },
    {
        _id: '33',
        author: {
            username: 'julesandmilo',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (32).jpg',
        caption: 'he owns the place',
        timeAgo: '34 hours ago',
        likes: 40,
        comments: [
            {
                _id: '97',
                author: {
                    username: 'faye.pets',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'this is familiar. again.',
                timeAgo: '33 hours ago',
                likes: 11
            },
            {
                _id: '98',
                author: {
                    username: 'dan.yawn',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'he\'s tired. i\'m tired.',
                timeAgo: '33 hours ago',
                likes: 13
            },
            {
                _id: '99',
                author: {
                    username: 'mirah.kat',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'ctrl+c ctrl+v energy',
                timeAgo: '33 hours ago',
                likes: 8
            }
        ]
    },
    {
        _id: '34',
        author: {
            username: 'ethan.drives',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (33).jpg',
        caption: 'gray again',
        timeAgo: '35 hours ago',
        likes: 27,
        comments: [
            {
                _id: '100',
                author: {
                    username: 'breeee.42',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'every day is this now huh',
                timeAgo: '34 hours ago',
                likes: 10
            },
            {
                _id: '101',
                author: {
                    username: 'emma.lights',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'same weather. same post.',
                timeAgo: '34 hours ago',
                likes: 12
            },
            {
                _id: '102',
                author: {
                    username: 'no.reply',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'this made me more tired',
                timeAgo: '34 hours ago',
                likes: 7
            }
        ]
    },
    {
        _id: '35',
        author: {
            username: 'zara.sips',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (34).jpg',
        caption: 'new thoughts',
        timeAgo: '36 hours ago',
        likes: 35,
        comments: [
            {
                _id: '103',
                author: {
                    username: 'ash.still',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i don\'t think they\'re new anymore',
                timeAgo: '35 hours ago',
                likes: 14
            },
            {
                _id: '104',
                author: {
                    username: 'leo.bench',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this feels like silence',
                timeAgo: '35 hours ago',
                likes: 11
            },
            {
                _id: '105',
                author: {
                    username: 'cloud.here',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'why does this make me anxious',
                timeAgo: '35 hours ago',
                likes: 6
            }
        ]
    },
    {
        _id: '36',
        author: {
            username: 'lin.lockers',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (35).jpg',
        caption: 'we live here more than we live at home',
        timeAgo: '37 hours ago',
        likes: 29,
        comments: [
            {
                _id: '106',
                author: {
                    username: 'hal.dot',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'this caption\'s been here too long',
                timeAgo: '36 hours ago',
                likes: 13
            },
            {
                _id: '107',
                author: {
                    username: 'oscar.late',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'i\'m done scrolling',
                timeAgo: '36 hours ago',
                likes: 10
            },
            {
                _id: '108',
                author: {
                    username: 'jen.walks',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'same hallway, different nothing',
                timeAgo: '36 hours ago',
                likes: 7
            }
        ]
    },
    {
        _id: '37',
        author: {
            username: 'notes.by.rin',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (36).jpg',
        caption: 'idk if this is helping',
        timeAgo: '38 hours ago',
        likes: 21,
        comments: [
            {
                _id: '109',
                author: {
                    username: 'violet.ink',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'something\'s off here',
                timeAgo: '37 hours ago',
                likes: 9
            },
            {
                _id: '110',
                author: {
                    username: 'kira.squares',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'rin are u okay?',
                timeAgo: '37 hours ago',
                likes: 11
            },
            {
                _id: '111',
                author: {
                    username: 'xavier.notes',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'too real to look at',
                timeAgo: '37 hours ago',
                likes: 5
            }
        ]
    },
    {
        _id: '38',
        author: {
            username: 'bookish.nora',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (37).jpg',
        caption: 'forgot I liked reading',
        timeAgo: '39 hours ago',
        likes: 33,
        comments: [
            {
                _id: '112',
                author: {
                    username: 'amy.reviews',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i miss when this meant something',
                timeAgo: '38 hours ago',
                likes: 8
            },
            {
                _id: '113',
                author: {
                    username: 'dev.words',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this feels hollow',
                timeAgo: '38 hours ago',
                likes: 10
            },
            {
                _id: '114',
                author: {
                    username: 'elise.words',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'was this posted already?',
                timeAgo: '38 hours ago',
                likes: 6
            }
        ]
    },
    {
        _id: '39',
        author: {
            username: 'virtual.zoe',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (38).jpg',
        caption: 'still here',
        timeAgo: '40 hours ago',
        likes: 18,
        comments: [
            {
                _id: '115',
                author: {
                    username: 'cassie.types',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i thought this ended',
                timeAgo: '39 hours ago',
                likes: 8
            },
            {
                _id: '116',
                author: {
                    username: 'dev.incall',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'why does this hurt?',
                timeAgo: '39 hours ago',
                likes: 7
            },
            {
                _id: '117',
                author: {
                    username: 'marnie.rants',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'empty boxes talking to no one',
                timeAgo: '39 hours ago',
                likes: 5
            }
        ]
    },
    {
        _id: '40',
        author: {
            username: 'haleygroupchat',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (39).jpg',
        caption: 'these ppl >>',
        timeAgo: '41 hours ago',
        likes: 24,
        comments: [
            {
                _id: '118',
                author: {
                    username: 'tina.cloud',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'why does this feel like a memory glitch',
                timeAgo: '40 hours ago',
                likes: 9
            },
            {
                _id: '119',
                author: {
                    username: 'jamessays',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this was posted already??',
                timeAgo: '40 hours ago',
                likes: 7
            },
            {
                _id: '120',
                author: {
                    username: 'leo.camera',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'i\'m the blur in the back',
                timeAgo: '40 hours ago',
                likes: 5
            }
        ]
    },
    {
        _id: '41',
        author: {
            username: 'light.this.week',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (40).jpg',
        caption: 'almost gone',
        timeAgo: '42 hours ago',
        likes: 22,
        comments: [
            {
                _id: '121',
                author: {
                    username: 'kai.smokes',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'this one hurt different',
                timeAgo: '41 hours ago',
                likes: 11
            },
            {
                _id: '122',
                author: {
                    username: 'elena.dreams',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'i don\'t want this to be real',
                timeAgo: '41 hours ago',
                likes: 6
            },
            {
                _id: '123',
                author: {
                    username: 'ro.ro',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'when the flame goes out then what',
                timeAgo: '41 hours ago',
                likes: 5
            }
        ]
    },
    {
        _id: '42',
        author: {
            username: 'amelia.bday',
            profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
        },
        image: 'images/Image_fx (41).jpg',
        caption: 'made it another year 🎂',
        timeAgo: '43 hours ago',
        likes: 28,
        comments: [
            {
                _id: '124',
                author: {
                    username: 'sofi.chews',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'is this the same cake',
                timeAgo: '42 hours ago',
                likes: 10
            },
            {
                _id: '125',
                author: {
                    username: 'jamie.crumb',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'i don\'t think i celebrated this time',
                timeAgo: '42 hours ago',
                likes: 6
            },
            {
                _id: '126',
                author: {
                    username: 'dev.clock',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'this caption is looping',
                timeAgo: '42 hours ago',
                likes: 5
            }
        ]
    },
    {
        _id: '43',
        author: {
            username: 'chef.lee',
            profilePic: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150'
        },
        image: 'images/Image_fx (42).jpg',
        caption: 'worth the mess tbh',
        timeAgo: '44 hours ago',
        likes: 19,
        comments: [
            {
                _id: '127',
                author: {
                    username: 'baker.benji',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'what mess??',
                timeAgo: '43 hours ago',
                likes: 6
            },
            {
                _id: '128',
                author: {
                    username: 'kiki.mess',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'this is a blank post with a caption',
                timeAgo: '43 hours ago',
                likes: 8
            },
            {
                _id: '129',
                author: {
                    username: 'mari.mixes',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'something\'s not right here',
                timeAgo: '43 hours ago',
                likes: 4
            }
        ]
    },
    {
        _id: '44',
        author: {
            username: 'luke.up.there',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
        },
        image: 'images/Image_fx (43).jpg',
        caption: 'don\'t worry, I\'m fine',
        timeAgo: '45 hours ago',
        likes: 17,
        comments: [
            {
                _id: '130',
                author: {
                    username: 'ella.gone',
                    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
                },
                text: 'i don\'t believe you anymore',
                timeAgo: '44 hours ago',
                likes: 10
            },
            {
                _id: '131',
                author: {
                    username: 'keith.hollow',
                    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                },
                text: 'same post. same caption. different weight.',
                timeAgo: '44 hours ago',
                likes: 5
            },
            {
                _id: '132',
                author: {
                    username: 'mari.down',
                    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
                },
                text: 'come back inside please',
                timeAgo: '44 hours ago',
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
        timeAgo: '46 hours ago',
        likes: 0,
        comments: []
    }
]; 