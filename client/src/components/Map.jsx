import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { apiKey } from '../../../api-key';

let service;

const mapContainerStyle = { width: '40rem', height: '40rem' };
const placeStyle = { border: '1px solid black', margin: '.2rem' };
const options = { disableDefaultUI: true, zoomControl: true };
const center = { lat: 39.75, lng: -105.00 };

function Map() {
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: apiKey, libraries: ['places'] });
  const [places, setPlaces] = useState([]);
  const mapRef = React.useRef();
  const onMapLoad = useCallback((map) => { mapRef.current = map; }, []);

  const handleChange = (e) => {
    const input = e.target.value;
    const request = {
      location: center, radius: '500', query: input, type: ['restaurant'], region: ['US'],
    };

    service = new window.google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
      }
    });
  };

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return isLoaded
    ? (
      <div>
        <input onChange={handleChange} />
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onLoad={onMapLoad}
        />
        {
        places.length > 0
          ? places.slice(0, 5).map((place, index) => (
            <div key={index} style={placeStyle}>
              <div>
                Name:
                {' '}
                {place.name}
              </div>
              <div>
                Address:
                {' '}
                {place.vicinity}
              </div>
            </div>
          ))
          : <div>No results.</div>
      }
      </div>
    )
    : <div>Loading...</div>;
}

export default Map;
