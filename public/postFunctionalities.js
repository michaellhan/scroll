function flagPost(e) {
    console.log('Flag button clicked');
    e.preventDefault();
    e.stopPropagation();
    const target = $(e.target).closest('.ui.flag.button');
    console.log('Target element:', target);
    const post = target.closest(".ui.fluid.card");
    console.log('Post card:', post);
    const postID = post.attr("postid");
    console.log('Post ID:', postID);
    
    $.post(`/api/posts/${postID}/flag`, {
        _csrf: $('meta[name="csrf-token"]').attr('content')
    })
    .done(function(response) {
        console.log('Flag response:', response);
        const dimmer = post.find(".ui.dimmer.flag");
        console.log('Dimmer element:', dimmer);
        dimmer.dimmer({ closable: true }).dimmer('show');
    })
    .fail(function(error) {
        console.error('Flag error:', error);
    });
}

function unflagPost(e) {
    console.log('Unflag button clicked');
    const target = $(e.target);
    console.log('Target element:', target);
    const post = target.closest(".ui.fluid.card");
    console.log('Post card:', post);
    const postID = post.attr("postid");
    console.log('Post ID:', postID);

    $.post(`/api/posts/${postID}/unflag`, {
        _csrf: $('meta[name="csrf-token"]').attr('content')
    })
    .done(function(response) {
        console.log('Unflag response:', response);
        const dimmer = target.closest(".ui.fluid.card").find(".ui.dimmer.flag");
        console.log('Dimmer element:', dimmer);
        dimmer.removeClass("active").dimmer({ closable: true }).dimmer('hide');
    })
    .fail(function(error) {
        console.error('Unflag error:', error);
    });
}

function likePost(e) {
    const target = $(e.target).closest('.ui.like.button');
    const label = target.closest('.ui.like.button').next("a.ui.basic.red.left.pointing.label.count");
    const postID = target.closest(".ui.fluid.card").attr("postid");

    if (target.hasClass("red")) { // Unlike Post
        target.removeClass("red");
        label.html(function(i, val) { return val * 1 - 1 });

        $.post(`/api/posts/${postID}/unlike`, {
            _csrf: $('meta[name="csrf-token"]').attr('content')
        });
    } else { // Like Post
        target.addClass("red");
        label.html(function(i, val) { return val * 1 + 1 });

        $.post(`/api/posts/${postID}/like`, {
            _csrf: $('meta[name="csrf-token"]').attr('content')
        });
    }
} 