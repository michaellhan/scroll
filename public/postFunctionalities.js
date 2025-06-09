// Post timer functionality
function startPostTimer(postId) {
  const timerElement = $(`.ui.card[postid="${postId}"] .myTimer`);
  let seconds = 0;
  
  const timer = setInterval(function() {
    seconds++;
    timerElement.text(seconds);
    
    // Check if post should be hidden based on timer
    if (seconds >= 30) { // 30 seconds threshold
      clearInterval(timer);
      hidePost(postId);
    }
  }, 1000);
  
  // Store timer ID for cleanup
  timerElement.data('timerId', timer);
}

function hidePost(postId) {
  const post = $(`.ui.card[postid="${postId}"]`);
  post.fadeOut(500, function() {
    $(this).remove();
  });
}

// Post visibility tracking
function trackPostVisibility() {
  const posts = $('.ui.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const postId = entry.target.getAttribute('postid');
        startPostTimer(postId);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Post is considered visible when 50% is in view
  });
  
  posts.each(function() {
    observer.observe(this);
  });
}

// Post content filtering
function filterPostContent(text) {
  // Add your content filtering logic here
  return text;
}

// Post engagement tracking
function trackPostEngagement(postId, action) {
  $.post(`/api/posts/${postId}/track`, { action })
    .fail(function(error) {
      console.error('Error tracking engagement:', error);
    });
}

// Initialize post functionalities
$(document).ready(function() {
  // Start tracking post visibility
  trackPostVisibility();
  
  // Handle post content filtering
  $('.ui.card .description').each(function() {
    const text = $(this).text();
    $(this).text(filterPostContent(text));
  });
  
  // Track post engagement
  $('.ui.card').on('click', function() {
    const postId = $(this).attr('postid');
    trackPostEngagement(postId, 'view');
  });
  
  // Handle post interactions
  $('.ui.card').on('click', '.ui.button', function() {
    const postId = $(this).closest('.ui.card').attr('postid');
    const action = $(this).hasClass('like') ? 'like' : 
                  $(this).hasClass('flag') ? 'flag' : 'reply';
    trackPostEngagement(postId, action);
  });
  
  // Handle comment interactions
  $('.ui.comments').on('click', '.actions a', function() {
    const postId = $(this).closest('.ui.card').attr('postid');
    const action = $(this).hasClass('like') ? 'comment_like' : 'comment_flag';
    trackPostEngagement(postId, action);
  });
  
  // Cleanup timers when leaving page
  $(window).on('beforeunload', function() {
    $('.myTimer').each(function() {
      const timerId = $(this).data('timerId');
      if (timerId) {
        clearInterval(timerId);
      }
    });
  });
}); 