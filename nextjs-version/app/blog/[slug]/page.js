import blogPostsData from '@/data/blog-posts.json';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }) {
  const post = blogPostsData.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="blog-post">
      <header className="post-header">
        <h1>{post.title}</h1>
        <p className="post-meta">{post.date} • {post.category}</p>
      </header>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
