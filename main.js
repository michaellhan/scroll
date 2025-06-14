$(document).ready(function() {
    // Initialize posts
    function initializePosts() {
        const $content = $('#content');
        $content.empty();

        posts.forEach(post => {
            const postHtml = createPostHtml(post);
            $content.append(postHtml);
        });

        // Initialize Semantic UI components
        $('.ui.dropdown').dropdown();
        $('.ui.accordion').accordion();
    }

    // Create HTML for a post
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
                        <img src="${post.image || 'images/icons/picture.svg'}" style="max-width: 100%; width: 100%; display: inline-block !important;" class="transition visible" onerror="this.onerror=null;this.src='images/icons/picture.svg'">
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
});