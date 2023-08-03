
// // ///////////////////-----------------------
// import React, { useState } from 'react';
// import Board from './TicTsx';

// function Game() {
//   const [history, setHistory] = useState([Array(16).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares: Array<string | null>) {
//     setHistory(history.slice(0, currentMove + 1));
//     setHistory((prevHistory) => [...prevHistory, nextSquares]);
//     setCurrentMove((prevMove) => prevMove + 1);
//   }

//   function jumpTo(nextMove: number) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move) => {
//     let description = move > 0 ? `Go to move #${move}` : 'Go to game start';
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// export default Game;

///////////////////////////---------------------------------
import React, { useState } from 'react';

import { calculateWinner } from './calculateWinner';
import SquareValue from './types';

import PlayerSelection from './playerSelection';
import Board from './TicTsx';


export default function Game() {
  const [history, setHistory] = useState([Array(16).fill('')]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove] as SquareValue[]; // <-- Add this type assertion


  const [playerIcons, setPlayerIcons] = useState({
    playerX: null,
    playerO: null,
  });

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleIconSelect(icon: JSX.Element, player: 'playerX' | 'playerO') {
    setPlayerIcons((prevIcons) => ({
      ...prevIcons,
      [player]: icon,
    }));
  }

  const moves = history.map((squares, move) => {
    // ...
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} playerIcons={playerIcons} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <div className="player-selection">
        <PlayerSelection onSelect={handleIconSelect} />
      </div>
    </div>
  );
}