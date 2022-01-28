import React, { useState, useEffect } from 'react';

import api_key from '../../api-key.js';
import Map from './components/Map';

const App = () => {
  return (
    <div className="App">
      <Map />
    </div>
  );
};

export default App;
