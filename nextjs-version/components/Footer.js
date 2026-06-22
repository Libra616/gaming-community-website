import Link from 'next/link';
import '@/styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Gaming Community. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#discord">Discord</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#twitch">Twitch</a></li>
          <li><a href="#youtube">YouTube</a></li>
        </ul>
      </div>
    </footer>
  );
}
