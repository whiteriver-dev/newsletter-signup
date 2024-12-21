// Button.js
import React from 'react';
import './Button.scss'

function Button({text, className}) {
  return (
    <button className={className}>
      {text}
    </button>
  );
}

export default Button;