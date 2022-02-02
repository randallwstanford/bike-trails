import React from 'react';

// Styles
import { legendStyle, darkGreen, lightGreen, dashedGreen, headerContainerStyle } from './headerStyles';

const Header = () => (
  <nav style={headerContainerStyle}>
    <h2>Bike Trails</h2>
    <div style={legendStyle}>
      <span style={darkGreen}>Dark green - trails and paths for cyclists.</span>
      <span style={lightGreen}>Light green - roads with dedicated lanes for cyclist.</span>
      <span style={dashedGreen}>Dashed green - cyclist friendly roads.</span>
    </div>
  </nav>
);

export default Header;
