import React, { useState } from 'react';
import { FaUser, FaUserSecret, FaUserTie } from 'react-icons/fa';

interface PlayerSelectionProps {
  onSelect: (icon: JSX.Element, player: 'playerX' | 'playerO') => void;
}

const PlayerSelection: React.FC<PlayerSelectionProps> = ({ onSelect }) => {
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null);

  const handleIconSelect = (icon: JSX.Element) => {
    setSelectedIcon(icon);
    onSelect(icon, selectedIcon === null ? 'playerX' : 'playerO');
  };

  return (
    <div>
      <h3>Select Player Icons:</h3>
      <button onClick={() => handleIconSelect(<FaUser />)}>
        <FaUser />
      </button>
      <button onClick={() => handleIconSelect(<FaUserSecret />)}>
        <FaUserSecret />
      </button>
      <button onClick={() => handleIconSelect(<FaUserTie />)}>
        <FaUserTie />
      </button>
    </div>
  );
};

export default PlayerSelection;