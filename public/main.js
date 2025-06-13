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
                        <img src="${post.author.profilePic || 'public/images/icons/no-avatar.png'}" onerror="this.onerror=null;this.src='public/images/icons/no-avatar.png'">
                    </div>
                    <span>${post.author.name}</span>
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
                        <img src="${post.image || 'public/images/icons/picture.svg'}" style="max-width: 100%; width: 100%; display: inline-block !important;" class="transition visible" onerror="this.onerror=null;this.src='public/images/icons/picture.svg'">
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
                            <img class="ui avatar image small" src="public/images/icons/no-avatar.png" name="${user.username}" onerror="this.onerror=null;this.src='public/images/icons/no-avatar.png'">
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
                <div class="content transition hidden">
                    <div class="text" style="background-color: black; color: white; padding: 0.2em;">You flagged this comment. The admins will review this comment further. We are sorry you had this experience.</div>
                    <div class="actions">
                        <a class="unflag comment">Unflag</a>
                    </div>
                </div>
                <div class="ui avatar image">
                    <img src="${comment.author.profilePic || 'public/images/icons/no-avatar.png'}" onerror="this.onerror=null;this.src='public/images/icons/no-avatar.png'">
                </div>
                <div class="content">
                    <div class="header" style="display: flex; align-items: center; gap: 1em;">
                        <div class="author">${comment.author.name}</div>
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
                        <a class="like comment ${comment.liked ? 'red' : ''}">Like</a>
                        <a class="flag comment">Flag</a>
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

    // Handle comment submission
    $(document).on('click', '.send.link.icon', function() {
        const $icon = $(this);
        const $card = $icon.closest('.card');
        const $textarea = $card.find('.newcomment');
        const text = $textarea.val().trim();
        const postId = $card.attr('postid');
        const post = posts.find(p => p._id === postId);
        
        if (text && post) {
            const newComment = {
                _id: Date.now().toString(),
                author: {
                    username: user.username,
                    name: user.username,
                    profilePic: 'public/images/icons/no-avatar.png'
                },
                text: text,
                timeAgo: 'Just now',
                likes: 0
            };
            
            post.comments.push(newComment);
            $card.find('.ui.comments').append(createCommentHtml(newComment));
            $textarea.val('');
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
        console.log('Flag button clicked');
        console.log('Event target:', e.target);
        
        const target = $(e.target);
        console.log('Target element:', target);
        
        const commentElement = target.parents(".comment");
        console.log('Comment element:', commentElement);
        
        const comment_imageElement = commentElement.children('.ui.avatar.image');
        const comment_contentElement = commentElement.children('.content:not(.transition)');
        const flaggedComment_contentElement = commentElement.children('.content.transition');
        
        console.log('Image element:', comment_imageElement);
        console.log('Content element:', comment_contentElement);
        console.log('Flagged content element:', flaggedComment_contentElement);
        
        comment_imageElement.transition('hide');
        comment_contentElement.transition('hide');
        flaggedComment_contentElement.transition();
    });

    // Handle comment unflag
    $(document).on('click', '.unflag.comment', function(e) {
        console.log('Unflag button clicked');
        console.log('Event target:', e.target);
        
        const target = $(e.target);
        console.log('Target element:', target);
        
        const commentElement = target.parents(".comment");
        console.log('Comment element:', commentElement);
        
        const comment_imageElement = commentElement.children('.ui.avatar.image.hidden');
        const comment_contentElement = commentElement.children('.content.hidden');
        const flaggedComment_contentElement = commentElement.children('.content:not(.hidden)');
        
        console.log('Image element:', comment_imageElement);
        console.log('Content element:', comment_contentElement);
        console.log('Flagged content element:', flaggedComment_contentElement);
        
        flaggedComment_contentElement.transition('hide');
        comment_imageElement.transition();
        comment_imageElement.find("img").visibility('refresh');
        comment_contentElement.transition();
    });

    // Initialize the page
    initializePosts();
});