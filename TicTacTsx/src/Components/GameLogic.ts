export function calculateWinner(board: string[]): string | null {
    // Winning patterns (3 in a row, horizontally, vertically, or diagonally)
    const winningPatterns = [
      [0, 1, 2],
      [1, 2, 3],
      [4, 5, 6],
      [5, 6, 7],
      [8, 9, 10],
      [9, 10, 11],
      [12, 13, 14],
      [13, 14, 15],
      [0, 4, 8],
      [4, 8, 12],
      [1, 5, 9],
      [5, 9, 13],
      [2, 6, 10],
      [6, 10, 14],
      [3, 7, 11],
      [7, 11, 15],
      [0, 5, 10],
      [5, 10, 15],
      [3, 6, 9],
      [6, 9, 12],
    ];
  
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    return null; // No winner
  }
  
  // Function to get a random empty cell index for the PC's move
  export function getRandomMove(board: string[]): number {
    const emptyCells: number[] = [];
    board.forEach((value, index) => {
      if (value === "") {
        emptyCells.push(index);
      }
    });
  
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }