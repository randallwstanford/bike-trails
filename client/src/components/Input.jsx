import React from 'react';

function Input() {
  const inputStyle = {
    margin: '1rem',
  };

  return (
    <input type="text" style={inputStyle} placeholder="Search" />
  );
}

export default Input;
