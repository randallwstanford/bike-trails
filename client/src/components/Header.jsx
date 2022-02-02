import React from 'react';

function Header() {
  const headerContainerStyle = {
    margin: '1rem',
    textAlign: 'center',
  };

  const legendStyle = {
    padding: '1rem',
    background: '#C4D2E8',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const darkGreen = {
    paddingBottom: '1rem',
    borderBottom: '.2rem solid #046A00',
  };
  const lightGreen = {
    borderBottom: '.2rem solid #06A800',
  };

  const dashedGreen = {
    borderBottom: '.2rem dashed #046A00',
  };

  return (
    <nav style={headerContainerStyle}>
      <h2>Bike Trails</h2>
      <div style={legendStyle}>
        <span style={darkGreen}>Dark green - trails and paths for cyclists.</span>
        <span style={lightGreen}>Light green - roads with dedicated lanes for cyclist.</span>
        <span style={dashedGreen}>Dashed green - cyclist friendly roads.</span>
      </div>
    </nav>
  );
}

export default Header;
