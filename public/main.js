$(document).ready(function() {
  // Initialize Semantic UI components
  $('.ui.dropdown').dropdown();
  
  // Initialize dimmers
  $('.ui.fluid.card').each(function() {
    const $card = $(this);
    const $dimmer = $card.find('.ui.dimmer.flag');
    $dimmer.dimmer({
      closable: true,
      onShow: function() {
        console.log('Dimmer showing');
      },
      onHide: function() {
        console.log('Dimmer hiding');
      }
    });
  });
  
  // Add click handler for send icon
  $('.send.link.icon').on('click', function() {
    const $card = $(this).closest('.ui.card');
    const $commentInput = $card.find('textarea.newcomment');
    const text = $commentInput.val().trim();
    const postId = $card.attr('postid');
    if (text) {
      createComment(postId, text);
      $commentInput.val('');
    }
  });
  
  // Handle reply button clicks
  $('.ui.reply.button').on('click', function() {
    const $card = $(this).closest('.ui.card');
    const $commentInput = $card.find('textarea.newcomment');
    $commentInput.focus();
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
  $('.ui.like.button').on('click', function(e) {
    const $button = $(this);
    const postId = $button.closest('[postid]').attr('postid');
    if ($button.hasClass('red')) {
      unlikePost(postId, $button);
    } else {
      likePost(postId);
    }
  });

  // Handle comment like clicks
  $('.like.comment').on('click', function() {
    const $button = $(this);
    const commentId = $button.closest('.comment').attr('commentid');
    const isLiked = $button.hasClass('red');
    
    if (isLiked) {
      unlikeComment(commentId, $button);
    } else {
      likeComment(commentId, $button);
    }
  });

  // Handle flag button clicks
  $('.ui.flag.button').on('click', flagPost);

  // Handle unflag actions
  $('.unflag').on('click', unflagPost);

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

  // Initialize CSRF token from meta tag if available
  const metaToken = document.querySelector('meta[name="csrf-token"]')?.content;
  if (metaToken) {
    setCsrfToken(metaToken);
  }

  // Make an initial request to get a CSRF token
  fetch('/', {
    method: 'GET',
    credentials: 'include'
  }).then(response => {
    const token = response.headers.get('X-CSRF-Token');
    if (token) {
      setCsrfToken(token);
    }
  });
});

// API Functions
let csrfToken = '';

function getCsrfToken() {
  return csrfToken;
}

function setCsrfToken(token) {
  if (token) {
    csrfToken = token;
  }
}

// Add response interceptor to capture CSRF token
$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', getCsrfToken());
  },
  complete: function(xhr) {
    const token = xhr.getResponseHeader('X-CSRF-Token');
    if (token) {
      setCsrfToken(token);
    }
  }
});

function likePost(postId) {
  const post = document.querySelector(`[postid="${postId}"]`);
  if (!post) {
    console.error('Post element not found for postId:', postId);
    return;
  }
  const likeButton = post.querySelector('.like.button');
  const likeCount = post.querySelector('.count');
  
  fetch(`/api/posts/${postId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCsrfToken()
    },
    credentials: 'include'
  })
  .then(response => {
    const token = response.headers.get('X-CSRF-Token');
    if (token) {
      setCsrfToken(token);
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      likeButton.classList.add('red');
      likeCount.textContent = data.likes;
    }
  })
  .catch(error => console.error('Error:', error));
}

function unlikePost(postId, $button) {
  const post = document.querySelector(`[postid="${postId}"]`);
  if (!post) {
    console.error('Post element not found for postId:', postId);
    return;
  }
  const likeButton = post.querySelector('.like.button');
  const likeCount = post.querySelector('.count');
  
  fetch(`/api/posts/${postId}/unlike`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCsrfToken()
    }
  })
  .then(response => {
    const token = response.headers.get('X-CSRF-Token');
    if (token) {
      setCsrfToken(token);
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      likeButton.classList.remove('red');
      likeCount.textContent = data.likes;
    }
  })
  .catch(error => console.error('Error:', error));
}

function likeComment(commentId, $button) {
  $.ajax({
    url: `/api/comments/${commentId}/like`,
    method: 'POST',
    headers: {
      'X-CSRF-Token': getCsrfToken()
    },
    success: function(response) {
      $button.addClass('red');
      $button.closest('.comment').find('.num').text(response.likes);
    },
    error: function(error) {
      console.error('Error liking comment:', error);
    }
  });
}

function unlikeComment(commentId, $button) {
  $.ajax({
    url: `/api/comments/${commentId}/unlike`,
    method: 'POST',
    headers: {
      'X-CSRF-Token': getCsrfToken()
    },
    success: function(response) {
      $button.removeClass('red');
      $button.closest('.comment').find('.num').text(response.likes);
    },
    error: function(error) {
      console.error('Error unliking comment:', error);
    }
  });
}

function createComment(postId, text) {
  $.ajax({
    url: `/api/posts/${postId}/comments`,
    method: 'POST',
    headers: {
      'X-CSRF-Token': getCsrfToken()
    },
    data: { text },
    success: function(response) {
      const comment = response.comment;
      const $comments = $(`.ui.card[postid="${postId}"] .ui.comments`);
      
      const commentHtml = `
        <div class="comment" commentid="${comment._id}">
          <a class="avatar" href="/user/${comment.author.username}">
            <img src="${comment.author.profilePic}" onerror="this.onerror=null;this.src='https://via.placeholder.com/50?text=User'">
          </a>
          <div class="content">
            <a class="author" href="/user/${comment.author.username}">${comment.author.name}</a>
            <div class="metadata">
              <span class="date">${comment.timeAgo}</span>
              <div class="rating">
                <i class="heart icon"></i>
                <span class="num">${comment.likes}</span> Likes
              </div>
            </div>
            <div class="text">${comment.text}</div>
            <div class="actions">
              <a class="like comment">Like</a>
              <a class="flag comment">Flag</a>
            </div>
          </div>
        </div>
      `;
      
      $comments.append(commentHtml);
    },
    error: function(error) {
      console.error('Error creating comment:', error);
    }
  });
}

function flagPost(postId) {
  const post = document.querySelector(`[postid="${postId}"]`);
  const flagButton = post.querySelector('.flag.button');
  const dimmer = post.querySelector('.dimmer.flag');
  
  fetch(`/api/posts/${postId}/flag`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCsrfToken()
    }
  })
  .then(response => {
    const token = response.headers.get('X-CSRF-Token');
    if (token) {
      setCsrfToken(token);
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      flagButton.classList.add('red');
      $(dimmer).dimmer('show');
    }
  })
  .catch(error => console.error('Error:', error));
}

function unflagPost(postId) {
  const post = document.querySelector(`[postid="${postId}"]`);
  const flagButton = post.querySelector('.flag.button');
  const dimmer = post.querySelector('.dimmer.flag');
  
  fetch(`/api/posts/${postId}/unflag`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCsrfToken()
    }
  })
  .then(response => {
    const token = response.headers.get('X-CSRF-Token');
    if (token) {
      setCsrfToken(token);
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      flagButton.classList.remove('red');
      $(dimmer).dimmer('hide');
    }
  })
  .catch(error => console.error('Error:', error));
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

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Like button click handler
  document.querySelectorAll('.like.button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const postId = this.closest('[postid]').getAttribute('postid');
      likePost(postId);
    });
  });

  // Reply button click handler
  document.querySelectorAll('.reply.button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const postId = this.closest('[postid]').getAttribute('postid');
      toggleCommentBox(postId);
    });
  });

  // Flag button click handler
  document.querySelectorAll('.flag.button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const postId = this.closest('[postid]').getAttribute('postid');
      flagPost(postId);
    });
  });

  // Unflag button click handler
  document.querySelectorAll('.unflag.button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const postId = this.closest('[postid]').getAttribute('postid');
      unflagPost(postId);
    });
  });

  // Prevent flag button from triggering when clicking post image
  document.querySelectorAll('.img.post.image').forEach(img => {
    img.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
});

function toggleCommentBox(postId) {
  const post = document.querySelector(`[postid="${postId}"]`);
  const commentInput = post.querySelector('.newcomment');
  const isVisible = commentInput.style.display !== 'none';
  commentInput.style.display = isVisible ? 'none' : 'flex';
}