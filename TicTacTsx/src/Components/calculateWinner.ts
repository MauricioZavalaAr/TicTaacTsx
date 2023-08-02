// function calculateWinner(squares: Array<string | null>) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],

import SquareValue from "./types";


//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }
  
//   export default calculateWinner;





/////// ------

export function calculateWinner(squares: SquareValue[]): SquareValue | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      // Add your additional horizontal and vertical lines here
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      // Diagonal lines
    [0, 5, 10],
    [1, 6, 11],
    [4, 9, 14],
    [3, 6, 9],
    [2, 5, 8],
    [7, 10, 13],
    [6, 9, 12],
    [11, 14, 15],
    ];
  
    for (const line of lines) {
        const [a, b, c, d] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
          return squares[a];
        }
      }
      return null;
    }