/* eslint-disable no-unused-vars */
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
    mapRef.current.setZoom(11);
    const map = mapRef.current;

    const request = {
      location: { lat, lng },
      radius: '500000',
      query: 'bike trails',
    };

    service = new window.google.maps.places.PlacesService(mapRef.current);
    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
        results.forEach((result) => {
          const contentString = `
            <div style="text-align: center">
              <div>${result.name}</div>
              <div>${result.formatted_address}</div>
              </div>
            `;
          const infoWindow = new window.google.maps.InfoWindow({ content: contentString });
          const marker = new window.google.maps.Marker({
            position: result.geometry.location,
            title: result.name,
            map,
          });
          marker.addListener('click', () => {
            infoWindow.close();
            infoWindow.open({ anchor: marker, map });
            infoWindow.open(marker.getMap(), marker);
            mapRef.current.panTo({ lat: marker.position.lat(), lng: marker.position.lng() });
          });
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
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
        onLoad={onMapLoad}
      />
    </div>
  );
}

export default Map;
