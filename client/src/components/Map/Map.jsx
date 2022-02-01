/* eslint-disable no-console */

// Modules
import React, { useCallback, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// Components
import Search from '../Search/Search';
import Places from '../Places/Places';

// API Key
import { apiKey } from '../../../../api-key';

// Styles
import { placesContainer, mapContainerStyle } from './MapStyles';

let service;

const libraries = ['places'];
const options = { disableDefaultUI: true, zoomControl: true };
const center = { lat: 39.75, lng: -105.00 };

function Map() {
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: apiKey, libraries });
  const mapRef = React.useRef();
  const [places, setPlaces] = useState([]);
  // Map Load script
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    const bikeLayer = new window.google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
    const map = mapRef.current;

    const request = {
      location: { lat, lng },
      radius: '500',
      type: ['park'],
    };

    service = new window.google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
        console.log(results);
        results.forEach((result) => {
          // eslint-disable-next-line no-unused-vars
          const marker = new window.google.maps.Marker({ position: result.geometry.location, map });
        });
      }
    });
  }, []);

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div style={placesContainer}>
        <Search panTo={panTo} />
        <Places places={places} />
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onLoad={onMapLoad}
      />
    </div>
  );
}

export default Map;
