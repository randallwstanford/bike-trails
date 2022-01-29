import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { apiKey } from '../../../api-key';

function Map() {
  const mapStyles = { width: '40rem', height: '40rem' };
  const center = { lat: 39.75, lng: -105.00 };

  const onLoad = React.useCallback((map) => {
    const bikeLayer = new window.google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={center}
        onLoad={onLoad}
      />
    </LoadScript>
  );
}

export default Map;
