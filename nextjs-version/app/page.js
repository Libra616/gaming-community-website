import Image from 'next/image';
import Link from 'next/link';
import MemberCard from '@/components/MemberCard';
import EventCard from '@/components/EventCard';
import membersData from '@/data/members.json';
import eventsData from '@/data/events.json';
import blogPostsData from '@/data/blog-posts.json';

export default function Home() {
  const upcomingEvents = eventsData.slice(0, 3);
  const latestPosts = blogPostsData.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Gaming Community</h1>
        <p>Where Gamers Unite</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Join Discord</button>
          <Link href="/members" className="btn btn-secondary">
            View Members
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured</h2>
        <div className="featured-grid">
          <div className="feature-card">
            <span className="icon">👥</span>
            <h3>Members</h3>
            <p>Meet our talented community members</p>
            <Link href="/members">View Roster →</Link>
          </div>
          <div className="feature-card">
            <span className="icon">🏆</span>
            <h3>Tournaments</h3>
            <p>Compete in our regular tournaments</p>
            <Link href="/tournaments">View Results →</Link>
          </div>
          <div className="feature-card">
            <span className="icon">📅</span>
            <h3>Events</h3>
            <p>Check upcoming events and streams</p>
            <Link href="/events">View Calendar →</Link>
          </div>
        </div>
      </section>

      <section className="upcoming-events-section">
        <h2>Upcoming Events</h2>
        <div className="events-preview">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <Link href="/events" className="view-all">View All Events →</Link>
      </section>

      <section className="latest-news-section">
        <h2>Latest News</h2>
        <div className="news-grid">
          {latestPosts.map((post, index) => (
            <article key={index} className="news-card">
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
              <p className="excerpt">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>Read More →</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
