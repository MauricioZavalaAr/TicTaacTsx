import React from 'react'

interface SquareProps {
  value: string;
}


const Square: React.FC<SquareProps> = ({ value }) => (
    <button className="square">{value}</button>
  );
  

export default Square
