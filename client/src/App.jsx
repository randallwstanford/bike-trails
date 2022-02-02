import React from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';

const appContainerStyles = { margin: '10px 50px' };

function App() {
  return (
    <div style={appContainerStyles}>
      <Header />
      <Map />
    </div>
  );
}

export default App;
