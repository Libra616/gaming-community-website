let eventsData = [];
let tournamentsData = [];
let selectedEventGame = 'All';

Promise.all([
  fetch('data/events.json').then(r => r.json()),
  fetch('data/tournaments.json').then(r => r.json())
])
.then(([events, tournaments]) => {
  eventsData = events;
  tournamentsData = tournaments;
  
  if (window.location.pathname.includes('tournaments')) {
    renderTournaments();
  } else {
    renderEventFilters();
    renderEvents();
  }
})
.catch(error => console.error('Error loading data:', error));

function renderEventFilters() {
  const filterContainer = document.getElementById('eventFilters');
  if (!filterContainer) return;
  
  const games = ['All', ...new Set(eventsData.map(e => e.game))];

  games.forEach(game => {
    const button = document.createElement('button');
    button.className = `filter-btn ${game === 'All' ? 'active' : ''}`;
    button.textContent = game;
    button.addEventListener('click', () => filterByEventGame(game, games));
    filterContainer.appendChild(button);
  });
}

function filterByEventGame(game, games) {
  selectedEventGame = game;
  document.querySelectorAll('.filter-btn').forEach((btn, index) => {
    btn.classList.toggle('active', games[index] === game);
  });
  renderEvents();
}

function renderEvents() {
  const filtered = selectedEventGame === 'All' 
    ? eventsData 
    : eventsData.filter(e => e.game === selectedEventGame);

  const container = document.getElementById('eventsList');
  if (!container) return;
  
  container.innerHTML = '';

  filtered.forEach(event => {
    const month = Utils.getMonthName(event.date);
    const day = Utils.getDayNumber(event.date);
    
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <div class="event-date">
        <span class="month">${month}</span>
        <span class="day">${day}</span>
      </div>
      <div class="event-info">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderTournaments() {
  const container = document.getElementById('tournamentsGrid');
  if (!container) return;
  
  container.innerHTML = '';

  tournamentsData.forEach(tournament => {
    const date = Utils.formatDate(tournament.date);
    
    const card = document.createElement('div');
    card.className = 'tournament-card';
    card.innerHTML = `
      <h2>${tournament.name}</h2>
      <p>${date}</p>
      <p>${tournament.game}</p>
      <div class="podium">
        <div class="first-place">
          <p>${tournament.winner}</p>
        </div>
      </div>
      <p><strong>Runner-up:</strong> ${tournament.runner_up}</p>
      <p><strong>Prize Pool:</strong> ${tournament.prize_pool}</p>
    `;
    container.appendChild(card);
  });
}