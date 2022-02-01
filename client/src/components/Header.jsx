import React from 'react';

function Header() {
  const headerStyle = { margin: '1rem', textAlign: 'center', fontSize: '2.5rem' };

  return (
    <nav style={headerStyle}>
      <h2>Bike Trails</h2>
    </nav>
  );
}

export default Header;
