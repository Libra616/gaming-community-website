export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-date">
        <span className="month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
        <span className="day">{new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}</span>
      </div>
      <div className="event-info">
        <h3>{event.title}</h3>
        <p className="time">🕐 {event.time}</p>
        <p className="game">🎮 {event.game}</p>
        <p className="description">{event.description}</p>
        <div className="event-meta">
          <span className="participants">👥 {event.participants}</span>
          <span className="prize">💰 {event.prize_pool}</span>
          <span className={`status ${event.status}`}>{event.status.toUpperCase()}</span>
        </div>
        <button className="btn btn-primary">Register</button>
      </div>
    </div>
  );
}
