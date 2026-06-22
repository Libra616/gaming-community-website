let membersData = [];
let selectedGame = 'All';

fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    membersData = data;
    renderFilterButtons();
    renderMembers();
  })
  .catch(error => console.error('Error loading members:', error));

function renderFilterButtons() {
  const filterContainer = document.getElementById('filterButtons');
  const games = ['All', ...new Set(membersData.map(m => m.game))];

  games.forEach(game => {
    const button = document.createElement('button');
    button.className = `filter-btn ${game === 'All' ? 'active' : ''}`;
    button.textContent = game;
    button.addEventListener('click', () => filterByGame(game, games));
    filterContainer.appendChild(button);
  });
}

function filterByGame(game, games) {
  selectedGame = game;
  document.querySelectorAll('.filter-btn').forEach((btn, index) => {
    btn.classList.toggle('active', games[index] === game);
  });
  renderMembers();
}

function renderMembers() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filtered = membersData.filter(member => {
    const matchGame = selectedGame === 'All' || member.game === selectedGame;
    const matchSearch = member.name.toLowerCase().includes(searchTerm);
    return matchGame && matchSearch;
  });

  const container = document.getElementById('membersGrid');
  container.innerHTML = '';

  filtered.forEach(member => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `
      <img src="${member.avatar}" alt="${member.name}" class="member-avatar">
      <h2>${member.name}</h2>
      <p class="role">${member.role}</p>
      <div class="game-badge">${member.game}</div>
      <p class="rank">${member.rank}</p>
      <p>${member.bio}</p>
      <div class="social-links">
        ${member.links?.twitch ? `<a href="${member.links.twitch}" title="Twitch">Twitch</a>` : ''}
        ${member.links?.twitter ? `<a href="${member.links.twitter}" title="Twitter">Twitter</a>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', Utils.debounce(renderMembers, 300));
}