$(document).ready(function() {
    // Configuration
    const POSTS_PER_BATCH = 5;
    let currentBatch = 0;
    let isLoading = false;
    let allPostsLoaded = false;

    // Create skeleton post HTML
    function createSkeletonPostHtml() {
        return `
            <div class="ui fluid card skeleton-card">
                <div class="content">
                    <div class="skeleton-header">
                        <div class="skeleton skeleton-avatar"></div>
                        <div class="skeleton-header-content">
                            <div class="skeleton skeleton-text short"></div>
                            <div class="skeleton skeleton-text medium"></div>
                        </div>
                    </div>
                    <div class="skeleton skeleton-image"></div>
                    <div class="skeleton skeleton-text medium"></div>
                    <div class="skeleton skeleton-text short"></div>
                </div>
                <div class="ui bottom three attached icon buttons">
                    <div class="skeleton skeleton-button"></div>
                    <div class="skeleton skeleton-button"></div>
                    <div class="skeleton skeleton-button"></div>
                </div>
            </div>
        `;
    }

    // Preload image
    function preloadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
            img.src = src;
        });
    }

    // Initialize posts with lazy loading
    function initializePosts() {
        const $content = $('#content');
        $content.empty();
        loadNextBatch();
    }

    // Load next batch of posts
    async function loadNextBatch() {
        if (isLoading || allPostsLoaded) return;
        
        isLoading = true;
        const startIndex = currentBatch * POSTS_PER_BATCH;
        const endIndex = startIndex + POSTS_PER_BATCH;
        const batchPosts = posts.slice(startIndex, endIndex);

        // Add skeleton posts
        const $content = $('#content');
        const skeletonPosts = Array(POSTS_PER_BATCH).fill().map(() => createSkeletonPostHtml());
        $content.append(skeletonPosts.join(''));

        try {
            // Preload all images and profile pictures in the batch
            const imagePromises = batchPosts.map(post => {
                const promises = [
                    preloadImage(post.image || 'images/icons/picture.svg'),
                    preloadImage(post.author.profilePic || 'images/no-avatar.png')
                ];
                
                // Add profile picture preloading for comments
                post.comments.forEach(comment => {
                    promises.push(preloadImage(comment.author.profilePic || 'images/no-avatar.png'));
                });
                
                return Promise.all(promises);
            });
            
            await Promise.all(imagePromises);

            // Remove skeleton posts
            $content.find('.skeleton-card').remove();

            // Add actual posts
            batchPosts.forEach(post => {
                const postHtml = createPostHtml(post);
                const $post = $(postHtml);
                $post.addClass('content-loading');
                $content.append($post);
                
                // Fade in the post
                setTimeout(() => {
                    $post.removeClass('content-loading').addClass('content-loaded');
                }, 50);
            });

            // Initialize Semantic UI components for new posts
            $('.ui.dropdown').dropdown();
            $('.ui.accordion').accordion();

            currentBatch++;
            
            // Check if we've loaded all posts
            if (endIndex >= posts.length) {
                allPostsLoaded = true;
            }

            // Initialize fade-in effect for new content
            addFadeInEffect();
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            isLoading = false;
        }
    }

    // Create HTML for a post with lazy loading
    function createPostHtml(post) {
        return `
            <div class="ui fluid card" postcondition="" postid="${post._id}" type="actor" actor_un="${post.author.username}" actor_name="${post.author.name}" actor_pic="${post.author.profilePic}">
                <div class="content">
                    <div class="right floated time meta">${post.timeAgo}</div>
                    <div class="ui avatar image">
                        <img src="${post.author.profilePic || 'images/no-avatar.png'}" onerror="this.onerror=null;this.src='images/no-avatar.png'">
                    </div>
                    <span>${post.author.username}</span>
                </div>
                <div class="content dimmable">
                    <div class="ui dimmer flag">
                        <div class="content">
                            <div class="center">
                                <h2 class="ui inverted icon header">
                                    <i class="red flag icon"></i>
                                    You've flagged this!
                                </h2>
                                <h3 class="ui inverted header">
                                    <span>The admins will review this post further. We are sorry you had this experience.</span>
                                </h3>
                                <div class="ui inverted unflag button" tabindex="0">
                                    <i class="flag icon"></i>
                                    Unflag
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="img post image">
                        <img src="${post.image || 'images/icons/picture.svg'}" 
                             style="max-width: 100%; width: 100%; display: inline-block !important;" 
                             class="transition visible" 
                             onerror="this.onerror=null;this.src='images/icons/picture.svg'">
                    </div>
                    <div class="description">${post.caption}</div>
                    <div class="myTimer hidden">0</div>
                </div>
                <div class="ui bottom three attached icon buttons">
                    <div class="ui reply button" tabindex="0">
                        <i class="reply icon"></i>
                        Reply
                    </div>
                    <div class="ui flag button" tabindex="0">
                        <i class="flag icon"></i>
                        Flag
                    </div>
                    <div class="ui labeled button" tabindex="0">
                        <div class="ui like button">
                            <i class="heart icon"></i>
                            Like
                        </div>
                        <a class="ui basic red left pointing label count">${post.likes}</a>
                    </div>
                </div>
                <div class="content">
                    <div class="ui comments">
                        ${post.comments.map(comment => createCommentHtml(comment)).join('')}
                    </div>
                </div>
                <div class="extra content">
                    <div class="ui fluid left labeled right icon input">
                        <div class="ui label">
                            <img class="ui avatar image small" src="images/no-avatar.png" name="${user.username}" onerror="this.onerror=null;this.src='images/no-avatar.png'">
                        </div>
                        <div class="ui form">
                            <div class="field">
                                <textarea class="newcomment" type="text" placeholder="Write a Comment" rows="1" style="resize: none; border: none; background: transparent;"></textarea>
                            </div>
                        </div>
                        <i class="big send link icon"></i>
                    </div>
                </div>
            </div>
        `;
    }

    // Create HTML for a comment
    function createCommentHtml(comment) {
        return `
            <div class="comment" data-comment-id="${comment._id}">
                <div class="ui avatar image">
                    <img src="${comment.author.profilePic || 'images/no-avatar.png'}" onerror="this.onerror=null;this.src='images/no-avatar.png'">
                </div>
                <div class="content">
                    <div class="header" style="display: flex; align-items: center; gap: 0em;">
                        <div class="author">${comment.author.username}</div>
                        <div class="metadata">
                            <span class="date">${comment.timeAgo}</span>
                            <div class="rating">
                                <i class="heart icon ${comment.liked ? 'red' : ''}"></i>
                                <span class="num">${comment.likes || 0}</span>
                                Likes
                            </div>
                        </div>
                    </div>
                    <div class="text">${comment.text}</div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                        <a class="flag comment">Flag</a>
                        <a class="like comment ${comment.liked ? 'red' : ''}">Like</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Handle like button click
    $(document).on('click', '.like.button', function() {
        const $button = $(this);
        const $card = $button.closest('.card');
        const postId = $card.attr('postid');
        const post = posts.find(p => p._id === postId);
        
        if (post) {
            if (!post.liked) {
                post.likes += 1;
                post.liked = true;
                $button.addClass('red');
                $card.find('.count').text(post.likes);
            }
        }
    });

    // Handle unlike button click
    $(document).on('click', '.like.button.red', function() {
        const $button = $(this);
        const $card = $button.closest('.card');
        const postId = $card.attr('postid');
        const post = posts.find(p => p._id === postId);
        
        if (post) {
            if (post.liked) {
                post.likes = Math.max(0, post.likes - 1);
                post.liked = false;
                $button.removeClass('red');
                $card.find('.count').text(post.likes);
            }
        }
    });

    // Handle flag button click
    $(document).on('click', '.flag.button', function() {
        const $button = $(this);
        const $card = $button.closest('.card');
        const postId = $card.attr('postid');
        const post = posts.find(p => p._id === postId);
        
        if (post) {
            post.flagged = true;
            $card.find('.dimmer.flag').dimmer('show');
        }
    });

    // Handle unflag button click
    $(document).on('click', '.unflag.button', function() {
        const $button = $(this);
        const $card = $button.closest('.card');
        const postId = $card.attr('postid');
        const post = posts.find(p => p._id === postId);
        
        if (post) {
            post.flagged = false;
            $card.find('.dimmer.flag').dimmer('hide');
        }
    });

    // Handle reply button click
    $(document).on('click', '.reply.button', function() {
        const $button = $(this);
        const $card = $button.closest('.card');
        const $textarea = $card.find('.newcomment');
        const $form = $textarea.closest('.ui.form');
        
        // Clear any existing reply state
        $textarea.attr('placeholder', 'Write a Comment');
        $textarea.data('replying-to', null);
        
        // Focus the textarea
        $textarea.focus();
    });

    // Handle reply to comment
    $(document).on('click', '.comment .actions a.reply', function(e) {
        e.preventDefault();
        const $replyLink = $(this);
        const $comment = $replyLink.closest('.comment');
        const $card = $comment.closest('.card');
        const $textarea = $card.find('.newcomment');
        const username = $comment.find('.author').text();
        
        // Set reply state
        $textarea.attr('placeholder', `Reply to ${username}`);
        $textarea.data('replying-to', username);
        $textarea.focus();
    });

    // Handle comment submission
    $(document).on('click', '.send.link.icon', function() {
        const $icon = $(this);
        const $card = $icon.closest('.card');
        const $textarea = $card.find('.newcomment');
        const text = $textarea.val().trim();
        const postId = $card.attr('postid');
        const post = posts.find(p => p._id === postId);
        const replyingTo = $textarea.data('replying-to');
        
        if (text && post) {
            const newComment = {
                _id: Date.now().toString(),
                author: {
                    username: user.username,
                    name: user.username,
                    profilePic: 'images/no-avatar.png'
                },
                text: replyingTo ? `@${replyingTo} ${text}` : text,
                timeAgo: 'Just now',
                likes: 0
            };
            
            post.comments.push(newComment);
            $card.find('.ui.comments').append(createCommentHtml(newComment));
            $textarea.val('');
            $textarea.attr('placeholder', 'Write a Comment');
            $textarea.data('replying-to', null);
        }
    });

    // Handle comment like
    $(document).on('click', '.like.comment', function(e) {
        console.log('Like button clicked');
        console.log('Event target:', e.target);
        
        const target = $(e.target);
        console.log('Target element:', target);
        
        const comment = target.parents(".comment");
        console.log('Comment element:', comment);
        
        const label = comment.find("span.num");
        console.log('Like count element:', label);
        
        if (target.hasClass("red")) { // Unlike comment
            console.log('Unliking comment');
            target.removeClass("red");
            comment.find("i.heart.icon").removeClass("red");
            target.html('Like');
            label.html(function(i, val) { return val * 1 - 1 });
        } else { // Like comment
            console.log('Liking comment');
            target.addClass("red");
            comment.find("i.heart.icon").addClass("red");
            target.html('Unlike');
            label.html(function(i, val) { return val * 1 + 1 });
        }
    });

    // Handle comment flag
    $(document).on('click', '.flag.comment', function(e) {
        const target = $(e.target);
        const commentElement = target.parents(".comment");
        const textElement = commentElement.find('.text');
        
        // Store original text if not already stored
        if (!textElement.data('original-text')) {
            textElement.data('original-text', textElement.text());
        }
        
        // Replace text with flagged message
        textElement.html('<div style="background-color: black; color: white; padding: 0.2em;">You flagged this comment. The admins will review this comment further. We are sorry you had this experience.</div>');
        
        // Update the flag link to unflag
        target.text('Unflag').removeClass('flag comment').addClass('unflag comment');
    });

    // Handle comment unflag
    $(document).on('click', '.unflag.comment', function(e) {
        const target = $(e.target);
        const commentElement = target.parents(".comment");
        const textElement = commentElement.find('.text');
        
        // Restore original text
        textElement.text(textElement.data('original-text'));
        
        // Update the unflag link back to flag
        target.text('Flag').removeClass('unflag comment').addClass('flag comment');
    });

    // Initialize lazy loading for images
    function initializeLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Handle scroll to load more posts
    let scrollTimeout;
    $(window).scroll(function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();
            const documentHeight = $(document).height();
            const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

            // Load more posts when user is near bottom
            if (scrollPercentage > 0.8 && !isLoading && !allPostsLoaded) {
                loadNextBatch();
            }

            // Initialize lazy loading for new images
            initializeLazyLoading();

            // Apply glitch effects if needed
            if (scrollPercentage > 0.6) {
                applyGlitchEffects();
            }
        }, 100);
    });

    // Initialize the page
    initializePosts();

    // Add this near the end of the file, before any closing brackets
    function checkScrollForWhatWasThis() {
        const content = document.getElementById('content');
        const whatWasThisContainer = document.getElementById('whatWasThisContainer');
        
        if (!content || !whatWasThisContainer) return;
        
        const contentBottom = content.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // If the bottom of the content is visible in the viewport
        if (contentBottom <= windowHeight) {
            // Add a 5 second delay before showing the button
            setTimeout(() => {
                whatWasThisContainer.style.opacity = '1';
                whatWasThisContainer.classList.add('visible');
            }, 5000);
        } else {
            whatWasThisContainer.style.opacity = '0';
            whatWasThisContainer.classList.remove('visible');
        }
    }

    // Add click handler for the "what was this?" button
    $('#whatWasThisButton').click(function() {
        $('#artistStatementModal').modal('show');
    });

    // Add click handler for the modal's close button
    $('.ui.modal .button').click(function() {
        $('#artistStatementModal').modal('hide');
    });

    // Add scroll event listener
    window.addEventListener('scroll', checkScrollForWhatWasThis);

    // Initial check
    checkScrollForWhatWasThis();

    // Add fade-in class to new content
    function addFadeInEffect() {
        $('.ui.card').each(function() {
            if (!$(this).hasClass('fade-in')) {
                $(this).addClass('fade-in');
            }
        });
    }

    // Track total number of posts
    const totalPosts = $('.ui.card').length;
    const deteriorationStart = Math.floor(totalPosts * 0.67); // Start at 2/3 of the feed

    // Function to apply glitch effects based on post index
    function applyGlitchEffects() {
        $('.ui.card').each(function(index) {
            const $card = $(this);
            const postIndex = index + 1;
            
            if (postIndex >= deteriorationStart) {
                // Calculate intensity based on position (0 to 1)
                const intensity = (postIndex - deteriorationStart) / (totalPosts - deteriorationStart);
                
                // Apply effects with lower probability
                if (Math.random() < intensity * 0.3) { // Reduced from 0.5
                    $card.find('.img.post.image').addClass('glitch-image');
                }
                if (Math.random() < intensity * 0.35) { // Reduced from 0.6
                    $card.find('.author').addClass('glitch-username');
                }
                if (Math.random() < intensity * 0.25) { // Reduced from 0.5
                    $card.find('.description').addClass('glitch-caption');
                }
                if (Math.random() < intensity * 0.2) { // Reduced from 0.4
                    $card.find('.comment').addClass('glitch-comment');
                }
                if (Math.random() < intensity * 0.15) { // Reduced from 0.3
                    $card.addClass('glitch-margin');
                }
                
                // Apply blur to images with lower probability
                if (Math.random() < intensity * 0.2) { // Reduced from 0.4
                    $card.find('.img.post.image img').addClass('image-blur');
                }
                
                // Add misalignment to fewer elements
                if (Math.random() < intensity * 0.15) { // Reduced from 0.35
                    $card.find('.content').addClass('misaligned');
                }

                // Add color shift effect with lower probability
                if (Math.random() < intensity * 0.15) { // Reduced from 0.25
                    $card.find('.img.post.image').addClass('color-shift');
                }
            }
        });
    }

    // Handle scroll effects with less frequent updates
    let lastScrollTop = 0;
    let scrollThreshold = 0.8;
    let lastEffectTime = 0;
    const effectInterval = 4000; // Apply effects every 4 seconds (increased from 2)

    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const scrollPercentage = (scrollTop + windowHeight) / documentHeight;
        const currentTime = Date.now();

        // Apply glitch effects less frequently
        if (scrollPercentage > 0.6 && currentTime - lastEffectTime > effectInterval) { // Start later at 60%
            applyGlitchEffects();
            lastEffectTime = currentTime;
        }

        // Update last scroll position
        lastScrollTop = scrollTop;
    });

    // Initialize effects
    applyGlitchEffects();

    // Initialize fade-in effect for existing content
    addFadeInEffect();
});