// Modules
import React, { useCallback, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// Components
import Search from '../Search/Search';
import Places from '../Places/Places';

// API Key
import { apiKey } from '../../../../api-key';

// Styles
import { placesContainer, mapContainerStyle, appContainer } from './MapStyles';

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
    new window.google.maps.BicyclingLayer().setMap(map);
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    const map = mapRef.current;
    const request = { location: { lat, lng }, query: 'bike trails' };

    map.panTo({ lat, lng });
    map.setZoom(11);

    service = new window.google.maps.places.PlacesService(map);

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);

        results.forEach((result) => {
          const { location } = result.geometry;
          const { name, formatted_address } = result;
          const marker = new window.google.maps.Marker({ position: location, title: name, map });
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="text-align: center">
                <div>${name}</div><div>${formatted_address}</div>
              </div>
            `,
          });

          map.addListener('click', () => { infoWindow.close(); });
          marker.addListener('click', () => {
            infoWindow.close();
            infoWindow.open({ anchor: marker, map });
            infoWindow.open(marker.getMap(), marker);
            map.panTo({ lat: marker.position.lat(), lng: marker.position.lng() });
          });
        });
      }
    });
  }, []);

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={appContainer}>
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
