import React from 'react';
import './Button.css';

const Button = ({ symbols, color, handleClick }) => {
  return(
    <div
      onClick={() => handleClick(symbol)}
      className="button-wrapper"
      style={{ backgroudcolor: color }}
    >
      {symbols}
    </div>
  );
};
export default Button;
