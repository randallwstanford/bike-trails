/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
// Modules
import React from 'react';

// Styles
import { noResultsStyle, placesContainer, placeStyle } from './PlacesStyles';

const places = [
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
  { name: 'test', vicinity: 'some address' },
];

function Places() {
  return (
    <div style={placesContainer}>
      {
        places.length > 0
          ? places.slice(1, 20).map((place, index) => (
            <div key={index} style={placeStyle}>
              <div>{index}. Name: {place.name}</div>
              <div>Address: {place.vicinity} </div>
            </div>
          ))
          : <div style={noResultsStyle}>No results.</div>
      }
    </div>
  );
}

export default Places;
