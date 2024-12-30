// Button.js
import React from 'react';
import './Button.scss'

function Button({text, className, onClick}) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;