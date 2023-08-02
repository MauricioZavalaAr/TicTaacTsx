import React from 'react';
import { FaUser, FaUserSecret, FaUserTie } from 'react-icons/fa';

interface PlayerSelectionProps {
  onSelect: (icon: JSX.Element) => void;
}

const PlayerSelection: React.FC<PlayerSelectionProps> = ({ onSelect }) => {
  return (
    <div className="player-selection">
      <h2>Select an icon for the player:</h2>
      <div className="icon-container">
        <button onClick={() => onSelect(<FaUser />)}>
          <FaUser />
        </button>
        <button onClick={() => onSelect(<FaUserSecret />)}>
          <FaUserSecret />
        </button>
        <button onClick={() => onSelect(<FaUserTie />)}>
          <FaUserTie />
        </button>
        {/* Add more buttons with other icons */}
      </div>
    </div>
  );
};

export default PlayerSelection;