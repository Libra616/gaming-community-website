import tournamentsData from '@/data/tournaments.json';

export default function TournamentsPage() {
  return (
    <div className="tournaments-page">
      <h1>Tournament Results</h1>
      <p>View past tournament winners and results</p>

      <div className="tournaments-grid">
        {tournamentsData.map((tournament, index) => (
          <div key={index} className="tournament-card">
            <h2>{tournament.name}</h2>
            <p className="date">📅 {new Date(tournament.date).toLocaleDateString()}</p>
            <p className="game">🎮 {tournament.game}</p>
            
            <div className="podium">
              <div className="first-place">
                <span className="medal">🥇</span>
                <p className="winner">{tournament.winner}</p>
              </div>
            </div>
            
            <div className="tournament-details">
              <p><strong>Runner-up:</strong> {tournament.runner_up}</p>
              <p><strong>Prize Pool:</strong> {tournament.prize_pool}</p>
              <p><strong>Participants:</strong> {tournament.participants}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
