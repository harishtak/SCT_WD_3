const board = document.getElementById("board");
const status = document.getElementById("status");
const playerSpan = document.getElementById("player");
const resetBtn = document.getElementById("reset");
const clickSound = document.getElementById("clickSound");
const winSound = document.getElementById("winSound");

let currentPlayer = "X";
let gameActive = true;
let cells = Array(9).fill("");

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function renderBoard() {
  board.innerHTML = "";
  cells.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.textContent = cell;
    cellDiv.dataset.index = index;
    board.appendChild(cellDiv);
  });
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (!gameActive || cells[index]) return;
  cells[index] = currentPlayer;
  clickSound.play();
  renderBoard();
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  playerSpan.textContent = currentPlayer;
}

function checkWinner() {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      gameActive = false;
      document.querySelectorAll(".cell")[a].classList.add("win");
      document.querySelectorAll(".cell")[b].classList.add("win");
      document.querySelectorAll(".cell")[c].classList.add("win");
      status.textContent = `Player ${cells[a]} Wins!`;
      winSound.play();
      return;
    }
  }

  if (!cells.includes("")) {
    status.textContent = "It's a Draw!";
    gameActive = false;
  }
}

resetBtn.addEventListener("click", () => {
  cells = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  status.textContent = "Your Turn: ";
  playerSpan.textContent = currentPlayer;
  renderBoard();
});

board.addEventListener("click", handleClick);

renderBoard();
