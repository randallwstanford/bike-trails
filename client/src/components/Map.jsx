import React from 'react'
import { GoogleMap, useJsApiLoader, LoadScript } from '@react-google-maps/api';
import { api_key } from '../../../api-key.js';

const Map = () => {

  const mapStyles = { width: '40rem', height: '40rem' };
  const center = { lat: 39.75, lng: -105.00 };

  return (
     <LoadScript
       googleMapsApiKey={api_key}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={center}
        />
     </LoadScript>
  )
}

export default Map;