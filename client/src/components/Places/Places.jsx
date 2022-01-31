/* eslint-disable max-len */
/* eslint-disable no-console */

// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { noResultsStyle, placeStyle } from './PlacesStyles';

const Places = ({ places }) => (
  <div>
    {
      places.length > 0
        ? places.map((place, index) => (
          <div key={index}>
            <div style={placeStyle}>
              <div>{index + 1}.
                <div>Name: {place.name}</div>
                <div>Address: {place.vicinity}</div>
                {console.log(place.photos)}
                {place.photos !== undefined
                  ? (
                    <div>
                      <div>Found {place.photos.length} photos.</div>
                      <img src={place.photos[0].getUrl()} alt="" height="250rem" />
                    </div>
                  ) : <div>No photos</div>}
              </div>
            </div>
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
      // map: PropTypes.func,
      // photos: PropTypes.shape({
      //   length: PropTypes.number,
      //   getUrl: PropTypes.func,
      // }),
    }),
  ).isRequired,
};

export default Places;
