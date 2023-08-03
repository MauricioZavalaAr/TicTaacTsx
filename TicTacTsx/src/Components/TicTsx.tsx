// ///////////// ------------------
// import React from 'react';
// import Square from './Square';
// import calculateWinner from './calculateWinner'; // Add this line to import the function

// interface BoardProps {
//   xIsNext: boolean;
//   squares: Array<string | null>;
//   onPlay: (nextSquares: Array<string | null>) => void;
// }

// ///



// const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
//   function handleClick(i: number) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? 'X' : 'O';
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//         <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
//         <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
//         <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
//         <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
//         <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
//         <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
//       </div>
//     </>
//   );
// };

// export default Board;



////////////////////////////----------------------
// ///////////// ------------------
import React, { useState } from "react";
import { getRandomMove } from "./GameLogic";
import { calculateWinner } from "./calculateWinner";


type Props = {
  userIcon: string;
};

const Board: React.FC<Props> = ({ userIcon }) => {
  const [board, setBoard] = useState(Array(16).fill(""));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const winner = calculateWinner(board);

  const handleCellClick = (index: number) => {
    if (board[index] === "" && !winner && isUserTurn) {
      const newBoard = [...board];
      newBoard[index] = userIcon;
      setBoard(newBoard);
      setIsUserTurn(false);
      setTimeout(() => makePCTurn(newBoard), 500); // Wait a bit before PC move
    }
  };

  const makePCTurn = (currentBoard: string[]) => {
    if (!winner && !isUserTurn) {
      const pcIcon = userIcon === "X" ? "O" : "X"; // Use the opposite icon of the user
      const randomMove = getRandomMove(currentBoard);
      const newBoard = [...currentBoard];
      newBoard[randomMove] = pcIcon;
      setBoard(newBoard);
      setIsUserTurn(true);
    }
  };

  const renderCells = () => {
    return board.map((value, index) => (
      <button key={index} onClick={() => handleCellClick(index)}>
        {value}
      </button>
    ));
  };

  const renderStatusMessage = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((cell) => cell !== "")) {
      return "It's a draw!";
    } else {
      return isUserTurn ? "Your turn" : "PC's turn";
    }
  };

  const handleResetGame = () => {
    setBoard(Array(16).fill(""));
    setIsUserTurn(true);
  };

  return (
    <div>
      <div className="board">
        {renderCells()}
      </div>
      <div className="status">
        {renderStatusMessage()}
      </div>
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
};

export default Board;