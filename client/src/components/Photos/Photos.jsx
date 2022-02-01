/* eslint-disable max-len */
/* eslint-disable no-console */

// Modules
import React from 'react';
import PropTypes from 'prop-types';

import { photoStyles, noPhotosStyle } from './PhotosStyle';

const Photos = ({ photos }) => (
  <div>
    {console.log('photos: ', photos)}
    {photos !== undefined
      ? (
        <div>
          {photos.length === 1 ? <div>Found 1 photo.</div> : <div>Found {photos.length} photos.</div>}
          <img src={photos[0].getUrl()} alt="" height="50rem" style={photoStyles} />
        </div>
      ) : <div style={noPhotosStyle}>No photos</div>}
  </div>
);

Photos.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({ getUrl: PropTypes.func }),
  ).isRequired,
};

export default Photos;
