class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all options
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
    this.goal = size - 1;
    this.pathCount = 0;
    this.size = size;
    const moves = [];
  }

  solve() {
    let moveRobot = (row, column) => {

      // WIN and toggle
      if (row === this.goal && column === this.goal) {
        this.pathCount += 1;
        for (let row = 0; row < n; row++) {
          for (let col = 0; col < n; col++) {
            if (this.board[row][column]) {
              this.board.togglePiece(row, column);
            }
          }
        }
        return;
      }
      
      // DOWN A ROW
      if (row + 1 < this.goal && row + 1 >= 0) {
        // has been visited?
        if (!this.board.hasBeenVisited(row + 1, column)) {
          this.board.togglePiece(row + 1, column);
          moveRobot(row + 1, column);
        }
      }

      // UP A ROW
      if (row - 1 < this.goal && row - 1 >= 0) {
        // has been visited?
        if (!this.board.hasBeenVisited(row - 1, column)) {
          this.board.togglePiece(row - 1, column);
          moveRobot(row - 1, column);
        }
      }

      // LEFT
      if (column - 1 < this.goal && column - 1 >= 0) {
        // has been visited?
        if (!this.board.hasBeenVisited(row, column - 1)) {
          this.board.togglePiece(row, column - 1);
          moveRobot(row, column - 1);
        }
      }

      // RIGHT
      if (column + 1 < this.goal && column + 1 >= 0) {
        // has been visited?
        if (!this.board.hasBeenVisited(row, column + 1)) {
          this.board.togglePiece(row, column + 1);
          moveRobot(row, column + 1);
        }
      }

      return;
    };

    moveRobot(0, 0);
    return this.pathCount;
  }
}

module.exports = { RobotPaths };
