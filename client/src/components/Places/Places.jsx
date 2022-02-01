/* eslint-disable max-len */
/* eslint-disable no-console */

// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Photos from '../Photos/Photos';

// Styles
import { noResultsStyle, placeStyle } from './PlacesStyles';

const Places = ({ places }) => (
  <div>
    {
      places.length > 0
        ? places.map((place, index) => (
          <div key={index} style={placeStyle}>
            <div>Name: {place.name}</div>
            <div>Address: {place.vicinity}</div>
            <Photos photos={place.photos} />
          </div>
        ))
        : <div style={noResultsStyle}>No results.</div>
    }
  </div>
);

Places.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      vicinity: PropTypes.string,
      length: PropTypes.number,
    }),
  ).isRequired,
};

export default Places;
