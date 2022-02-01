/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { suggestStyle } from './SearchStyles';

const Search = ({ panTo }) => {
  const { value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete();

  const handleInput = (e) => setValue(e.target.value);
  const handleSelect = ({ description }) => () => {
    setValue(description, false);
    clearSuggestions();
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => panTo({ lat, lng }))
      .catch((error) => console.error('Error: ', error));
  };

  const renderSuggestions = () => data.map((suggestion, index) => (
    <div key={index}>
      <button type="button" onClick={handleSelect(suggestion)} style={suggestStyle}>
        {suggestion.description}
      </button>
    </div>
  ));

  return (
    <div>
      <input value={value} onChange={handleInput} placeholder="Where are you going?" />
      {status === 'OK' ? <div>{renderSuggestions()}</div> : null}
    </div>
  );
};

Search.propTypes = {
  panTo: PropTypes.func.isRequired,
};

export default Search;
