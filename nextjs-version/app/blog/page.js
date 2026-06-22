import Link from 'next/link';
import blogPostsData from '@/data/blog-posts.json';

export default function BlogPage() {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <p>Latest news, guides, and community updates</p>

      <div className="blog-grid">
        {blogPostsData.map((post, index) => (
          <article key={index} className="blog-card">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p className="category">{post.category}</p>
            <p className="excerpt">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>Read More →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
