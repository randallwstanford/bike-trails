/* eslint-disable react/function-component-definition */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import {
  inputContainerStyle, inputStyle, suggestionsStyle, suggestStyle,
} from './SearchStyles';

const Search = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

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
    <div style={inputContainerStyle}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
        style={inputStyle}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' ? <div style={suggestionsStyle}>{renderSuggestions()}</div> : null}
    </div>
  );
};

export default Search;
