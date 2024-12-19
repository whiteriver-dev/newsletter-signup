// Button.js
import React from 'react';

function Button({text, className}) {
  return (
    <Button className={className}>
      {text}
    </Button>
  );
}

export default Button;