import React from 'react';
import Map from './components/Map';
import Header from './components/Header';

const mainStyles = {
  height: '60vh',
  margin: '10px 50px',
  filter: 'drop-shadow(-1px 5px 3px #ccc)',
};

function App() {
  return (
    <div style={mainStyles}>
      <Header />
      <Map />
    </div>
  );
}

export default App;
