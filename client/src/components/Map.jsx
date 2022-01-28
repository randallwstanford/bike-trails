import React, { useRef, useEffect } from 'react'
import { GoogleMap, LoadScript, useLoadScript } from '@react-google-maps/api';
import { api_key } from '../../../api-key.js';

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: api_key });
  const center = { lat: 39.7392, lng: -104.9903 };
  const containerStyle = { width: '40rem', height: '40rem' };

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div className="map">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </div>
  );
}

export default Map;