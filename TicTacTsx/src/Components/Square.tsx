// import React from 'react'

// interface SquareProps {
//   value: string | null;
//   onSquareClick: () => void;
// }

// const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value || "."}
//     </button>
//   );
// };

// export default Square;





///////////// -----------------------

import React from 'react';
import SquareValue from './types';

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  let displayValue: string | JSX.Element = '';

  if (Array.isArray(value)) {
    displayValue = value.map((icon, index) => (
      <span key={index}>
        {icon}
        {index < value.length - 1 && ' '}
      </span>
    ));
  } else {
    displayValue = value.toString();
  }

  return (
    <button className="square" onClick={onSquareClick}>
      {displayValue}
    </button>
  );
};

export default Square;