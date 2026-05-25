const games = {
  jump: {
    title: "Loogie Jump",
    url: "../Loogie%20Jump/Loogie%20Jump.html",
  },
  bridge: {
    title: "Loogie Bridge",
    url: "../Loogie%20Bridge/Loogie%20Bridge.html",
  },
};

const frame = document.querySelector("#game-frame");
const title = document.querySelector("#active-title");
const openLink = document.querySelector("#open-game");
const tabs = [...document.querySelectorAll(".tab")];
const cards = [...document.querySelectorAll(".game-card")];
const playButtons = [...document.querySelectorAll(".play-button")];

function selectGame(gameId) {
  const game = games[gameId];

  if (!game) {
    return;
  }

  title.textContent = game.title;
  frame.title = game.title;
  frame.src = game.url;
  openLink.href = game.url;

  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.gameId === gameId);
  });

  cards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.gameId === gameId);
  });
}

[...tabs, ...playButtons].forEach((control) => {
  control.addEventListener("click", () => selectGame(control.dataset.gameId));
});
