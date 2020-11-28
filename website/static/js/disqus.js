const PAGE_IDENTIFIER = window.location.pathname;
const BASE_URL = 'https://casbin.org';
const PAGE_URL = BASE_URL + PAGE_IDENTIFIER;

/**
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
 */
var disqus_config = function() {
  this.page.url = PAGE_URL; // Page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER; // Page's unique identifier variable
};

function loadDisqus() {
  (function() {
    // DON'T EDIT BELOW THIS LINE
    s = document.createElement('script');
    s.src = 'https://casbin.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (document.head || document.body).appendChild(s);
  })();
}

function maybeLoadDisqus() {
  const hr = document.createElement('hr');
  const disqusContainer = document.createElement('disqus');
  disqusContainer.id = 'disqus_thread';
  const postContainer = document.querySelectorAll('.post article')[0];
  const isDocsPage = PAGE_IDENTIFIER.indexOf('/docs') !== -1;
  if (postContainer && isDocsPage) {
    postContainer.appendChild(hr);
    postContainer.appendChild(disqusContainer);
    loadDisqus();
  }
  // editor page
  if (PAGE_IDENTIFIER.indexOf('/editor') !== -1) {
    var el = document.getElementById('disqus');
    el.appendChild(hr);
    el.appendChild(disqusContainer);
    loadDisqus();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  maybeLoadDisqus();
});
