'use client';

import { useState } from 'react';
import EventCard from '@/components/EventCard';
import eventsData from '@/data/events.json';

export default function EventsPage() {
  const [selectedGame, setSelectedGame] = useState('All');

  const games = ['All', ...new Set(eventsData.map(e => e.game))];
  const filtered = selectedGame === 'All' 
    ? eventsData 
    : eventsData.filter(e => e.game === selectedGame);

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <p>Join us for tournaments, casual games, and community events</p>

      <div className="event-filters">
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

      <div className="events-list">
        {filtered.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
