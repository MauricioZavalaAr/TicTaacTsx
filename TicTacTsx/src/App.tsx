import React, { useState } from "react";
import Board from "./components/TicTsx";

const App: React.FC = () => {
  const [userIcon, setUserIcon] = useState("X"); // Default icon for the user

  const handleIconSelect = (selectedIcon: string) => {
    setUserIcon(selectedIcon);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h3>Select your icon:</h3>
      <button onClick={() => handleIconSelect("X")}>X</button>
      <button onClick={() => handleIconSelect("O")}>O</button>
      <Board userIcon={userIcon} />
    </div>
  );
};

export default App;