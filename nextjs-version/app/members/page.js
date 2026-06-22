'use client';

import { useState } from 'react';
import MemberCard from '@/components/MemberCard';
import membersData from '@/data/members.json';

export default function MembersPage() {
  const [selectedGame, setSelectedGame] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const games = ['All', ...new Set(membersData.map(m => m.game))];
  const filtered = membersData.filter(member => {
    const matchGame = selectedGame === 'All' || member.game === selectedGame;
    const matchSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchGame && matchSearch;
  });

  return (
    <div className="members-page">
      <h1>Community Members</h1>
      <p>Meet the talented players and organizers in our community</p>

      <div className="members-controls">
        <input
          type="text"
          placeholder="Search members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="filter-buttons">
          {games.map(game => (
            <button
              key={game}
              className={`filter-btn ${selectedGame === game ? 'active' : ''}`}
              onClick={() => setSelectedGame(game)}
            >
              {game}
            </button>
          ))}
        </div>
      </div>

      <div className="members-grid">
        {filtered.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
