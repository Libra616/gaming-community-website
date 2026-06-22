let blogPostsData = [];

fetch('data/blog-posts.json')
  .then(response => response.json())
  .then(data => {
    blogPostsData = data;
    renderBlog();
    renderNewsPreview();
  })
  .catch(error => console.error('Error loading blog posts:', error));

function renderBlog() {
  const container = document.getElementById('blogGrid');
  if (!container) return;
  
  container.innerHTML = '';

  blogPostsData.forEach(post => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.innerHTML = `
      <h2>${post.title}</h2>
      <p class="date">${post.date}</p>
      <p>${post.excerpt}</p>
      <a href="blog-post.html?slug=${post.slug}">Read More</a>
    `;
    container.appendChild(card);
  });
}

function renderNewsPreview() {
  const preview = document.getElementById('newsGrid');
  if (!preview) return;
  
  preview.innerHTML = '';
  blogPostsData.slice(0, 3).forEach(post => {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p class="date">${post.date}</p>
      <p>${post.excerpt}</p>
      <a href="blog-post.html?slug=${post.slug}">Read More</a>
    `;
    preview.appendChild(card);
  });
}