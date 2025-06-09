$(document).ready(function() {
  // Initialize Semantic UI components
  $('.ui.dropdown').dropdown();
  $('.ui.dimmer').dimmer({
    on: 'click'
  });

  // Handle new post creation
  $('#newpost input').on('keypress', function(e) {
    if (e.which === 13) {
      const text = $(this).val().trim();
      if (text) {
        createPost(text);
        $(this).val('');
      }
    }
  });

  // Handle new comment submission
  $('.newcomment').on('keypress', function(e) {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      const text = $(this).val().trim();
      const postId = $(this).closest('.ui.card').attr('postid');
      if (text) {
        createComment(postId, text);
        $(this).val('');
      }
    }
  });

  // Handle like button clicks
  $('.ui.like.button').on('click', function() {
    const postId = $(this).closest('.ui.card').attr('postid');
    likePost(postId);
  });

  // Handle comment like clicks
  $('.like.comment').on('click', function() {
    const commentId = $(this).closest('.comment').attr('commentid');
    likeComment(commentId);
  });

  // Handle flag button clicks
  $('.ui.flag.button').on('click', function() {
    const postId = $(this).closest('.ui.card').attr('postid');
    flagPost(postId);
  });

  // Handle comment flag clicks
  $('.flag.comment').on('click', function() {
    const commentId = $(this).closest('.comment').attr('commentid');
    flagComment(commentId);
  });

  // Handle unflag actions
  $('.unflag').on('click', function() {
    const postId = $(this).closest('.ui.card').attr('postid');
    unflagPost(postId);
  });

  // Handle logout
  $('.logoutLink').on('click', function(e) {
    e.preventDefault();
    logout();
  });

  // Handle new post button
  $('.newpost').on('click', function() {
    $('#newpost input').focus();
  });

  // Handle edit profile button
  $('.editprofile').on('click', function() {
    window.location.href = '/account';
  });

  // Auto-resize textareas
  $('.newcomment').on('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
});

// API Functions
function createPost(text) {
  $.post('/api/posts', { text })
    .done(function(response) {
      location.reload();
    })
    .fail(function(error) {
      console.error('Error creating post:', error);
    });
}

function createComment(postId, text) {
  $.post(`/api/posts/${postId}/comments`, { text })
    .done(function(response) {
      location.reload();
    })
    .fail(function(error) {
      console.error('Error creating comment:', error);
    });
}

function likePost(postId) {
  $.post(`/api/posts/${postId}/like`)
    .done(function(response) {
      const count = response.likes;
      $(`.ui.card[postid="${postId}"] .count`).text(count);
    })
    .fail(function(error) {
      console.error('Error liking post:', error);
    });
}

function likeComment(commentId) {
  $.post(`/api/comments/${commentId}/like`)
    .done(function(response) {
      const count = response.likes;
      $(`.comment[commentid="${commentId}"] .num`).text(count);
    })
    .fail(function(error) {
      console.error('Error liking comment:', error);
    });
}

function flagPost(postId) {
  $.post(`/api/posts/${postId}/flag`)
    .done(function(response) {
      $(`.ui.card[postid="${postId}"] .ui.dimmer`).dimmer('show');
    })
    .fail(function(error) {
      console.error('Error flagging post:', error);
    });
}

function flagComment(commentId) {
  $.post(`/api/comments/${commentId}/flag`)
    .done(function(response) {
      $(`.comment[commentid="${commentId}"] .content.transition`).removeClass('hidden');
    })
    .fail(function(error) {
      console.error('Error flagging comment:', error);
    });
}

function unflagPost(postId) {
  $.post(`/api/posts/${postId}/unflag`)
    .done(function(response) {
      $(`.ui.card[postid="${postId}"] .ui.dimmer`).dimmer('hide');
    })
    .fail(function(error) {
      console.error('Error unflagging post:', error);
    });
}

function logout() {
  $.post('/logout')
    .done(function() {
      window.location.href = '/login';
    })
    .fail(function(error) {
      console.error('Error logging out:', error);
    });
} 