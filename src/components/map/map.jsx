import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import CurrentLocationProp from './current-location.prop';
import OfferProp from '../offer/offer.prop';
import "leaflet/dist/leaflet.css";

const Map = ({offers, currentLocation}) => {
  const mapRef = useRef();
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: currentLocation.latitude,
        lon: currentLocation.longitude
      },
      zoom: currentLocation.zoom,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((item) => {
      const {location, title} = item;
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: location.latitude,
        lon: location.longitude
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current)
        .bindPopup(title);
    });
    return () => {
      mapRef.current.remove();
    };
  }, [currentLocation]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferProp).isRequired,
  currentLocation: CurrentLocationProp
};

export default Map;
