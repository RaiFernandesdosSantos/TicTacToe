const PLAYER_X = "X";
const PLAYER_O = "O";

let currentPlayer = PLAYER_X;
let movesX = [];
let movesO = [];

const board = document.querySelectorAll(".btnCasas");
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  window.location.reload();
});

board.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    cell.disabled = true;
    cell.textContent = currentPlayer;
    recordMove(currentPlayer, index);

    if (checkWinner(currentPlayer)) {
      displayWinner(currentPlayer);
    } else if (checkDraw()) {
      alert("Empate!");
    } else {
      currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    }
  });
});

function recordMove(player, index) {
  if (player === PLAYER_X) {
    movesX.push(index);
  } else {
    movesO.push(index);
  }
}

function checkWinner(player) {
  const moves = player === PLAYER_X ? movesX : movesO;
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // linhas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // colunas
    [0, 4, 8],
    [2, 4, 6], // diagonais
  ];

  return winningCombinations.some((combination) => {
    return combination.every((cell) => moves.includes(cell));
  });
}

function checkDraw() {
  return movesX.length + movesO.length === 9;
}

function displayWinner(player) {
  alert(`O jogador ${player} venceu!`);
}
