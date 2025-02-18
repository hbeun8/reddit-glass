import React from "react";

function Button({ onClick, children }) {

    const buttonStyle={
        display: 'block',
        'margin-left': '20px',
        'line-height': '1.5',
        'font-size': '1rem',
        'borderRadius': '7px',
        backgroundColor: 'orange',
        color: 'black',
      };

    return (
      <button style={buttonStyle} onClick={onClick}>
        {children}
      </button>
    );
  }

export default Button;