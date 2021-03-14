import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import OfferProp from '../offer/offer.prop';
import "leaflet/dist/leaflet.css";
import {useSelector} from "react-redux";

const Map = ({offers}) => {
  const {currentLocation, isLoaded} = useSelector((state) => state.DATA);
  const {activeCardId} = useSelector((state) => state.PROCESS);

  const mapRef = useRef();
  const getItems = (items) => {
    items.forEach((item) => {
      const {location, title} = item;
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin${item.id === activeCardId ? `-active` : ``}.svg`,
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
  };
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: currentLocation.latitude,
        lon: currentLocation.longitude
      },
      zoom: currentLocation.zoom,
    });

    leaflet
      .tileLayer(`https:{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https:www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https:carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);
    getItems(offers);
    return () => {
      mapRef.current.remove();
    };
  }, [currentLocation, activeCardId, offers, isLoaded]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferProp.isRequired).isRequired,
};

export default Map;
