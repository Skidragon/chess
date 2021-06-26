type OpponentSelection = "Player" | "Computer";
interface Player {
  name: string;
}
interface Board {
  setupComputer: (difficulty: "easy" | "medium" | "hard") => void;
  setupPlayers: (player: Player, player2: Player) => void;
}
const player1 = {};
const player2 = {};

class Game {
  constructor(board: Board) {
    this.board = board;
  }
  start() {}
  load() {}
  against(opponent: OpponentSelection): void {
    if (opponent === "Player") {
    }
    if (opponent === "Computer") {
    }
  }
}
