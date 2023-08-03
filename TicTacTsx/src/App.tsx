import React from 'react';
import './App.css';
import Game from './Components/Game';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe with Icons</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
