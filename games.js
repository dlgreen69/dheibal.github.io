// Demo game data
const games = [
  {
    id: 1,
    title: "Fortune Spin",
    image: "game1.jpg",
    description: "Spin the wheel and test your luck. Big prizes await the lucky ones!",
  },
  {
    id: 2,
    title: "Lucky Slots",
    image: "game2.jpg",
    description: "Classic slot machine action with juicy jackpots and wild bonuses.",
  },
  {
    id: 3,
    title: "Roulette Royale",
    image: "game3.jpg",
    description: "Place your bets and watch the ball spin in this casino classic.",
  },
  {
    id: 4,
    title: "Poker Pro",
    image: "game4.jpg",
    description: "Test your poker face and win against the house or your friends.",
  },
  {
    id: 5,
    title: "Blackjack Blitz",
    image: "game5.jpg",
    description: "Try your hand at 21 in this fast-paced card favorite.",
  },
  {
    id: 6,
    title: "Baccarat Bash",
    image: "game6.jpg",
    description: "Simple rules, big rewards – will you beat the banker?",
  }
];

function renderGames() {
  const grid = document.getElementById('games-list');
  grid.innerHTML = "";
  games.forEach((game, idx) => {
    const card = document.createElement('div');
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <button data-idx="${idx}">Play</button>
    `;
    grid.appendChild(card);
  });
}

function showModal(game) {
  document.getElementById("modal-game-image").src = game.image;
  document.getElementById("modal-game-title").textContent = game.title;
  document.getElementById("modal-game-description").textContent = game.description;
  document.getElementById("game-modal").style.display = "flex";
  // Save current game to window for start
  window.currentGame = game;
}

function closeModal() {
  document.getElementById("game-modal").style.display = "none";
}

function showGameScreen(game) {
  document.getElementById("game-screen-title").textContent = game.title;
  document.getElementById("game-modal").style.display = "none";
  document.getElementById("game-screen-modal").style.display = "flex";
}

function closeGameScreen() {
  document.getElementById("game-screen-modal").style.display = "none";
}

window.onload = function() {
  renderGames();

  // Delegate play button clicks
  document.getElementById('games-list').addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON") {
      const idx = e.target.getAttribute('data-idx');
      const game = games[idx];
      showModal(game);
    }
  });

  document.getElementById("modal-close").onclick = closeModal;
  document.getElementById("game-screen-close").onclick = closeGameScreen;

  document.getElementById("start-game-btn").onclick = function() {
    showGameScreen(window.currentGame);
  };

  // Close modals on background click
  document.getElementById("game-modal").onclick = function(e) {
    if (e.target === this) closeModal();
  };
  document.getElementById("game-screen-modal").onclick = function(e) {
    if (e.target === this) closeGameScreen();
  };
};
