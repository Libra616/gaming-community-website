'use client';

import Link from 'next/link';
import { useState } from 'react';
import '@/styles/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            🎮 Gaming Community
          </Link>
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/members">Members</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/tournaments">Tournaments</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
