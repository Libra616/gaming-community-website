export default function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img src={member.avatar} alt={member.name} className="member-avatar" />
      <h2>{member.name}</h2>
      <p className="role">{member.role}</p>
      <div className="game-badge">{member.game}</div>
      <p className="rank">{member.rank}</p>
      <p className="bio">{member.bio}</p>
      <div className="social-links">
        {member.links?.twitch && <a href={member.links.twitch} title="Twitch">📺</a>}
        {member.links?.twitter && <a href={member.links.twitter} title="Twitter">𝕏</a>}
        {member.links?.discord && <a href={member.links.discord} title="Discord">💬</a>}
        {member.links?.youtube && <a href={member.links.youtube} title="YouTube">▶️</a>}
      </div>
    </div>
  );
}
