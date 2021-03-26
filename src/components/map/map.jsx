import React, {useEffect, useRef, memo} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import OfferProp from '../offer/offer.prop';
import {useSelector} from 'react-redux';
import 'leaflet/dist/leaflet.css';

const Map = ({offers}) => {
  const currentLocation = useSelector((state) => state.DATA.currentLocation);
  const activeCardId = useSelector((state) => state.PROCESS.activeCardId);
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
      .tileLayer(`https:{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https:www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https:carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };

  }, [currentLocation]);


  useEffect(() => {
    const markers = [];
    offers.forEach((item) => {
      const {title} = item;
      const customIcon = leaflet.icon({
        iconUrl: item.id === activeCardId ? `./img/pin-active.svg` : `./img/pin.svg`,
        iconSize: [27, 39]
      });

      const marker = leaflet.marker({
        lat: item.location.latitude,
        lng: item.location.longitude
      }, {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(title);

      markers.push(marker);
    });

    return () => {
      markers.forEach((marker) => {
        mapRef.current.removeLayer(marker);
      });
    };

  }, [offers, activeCardId]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferProp.isRequired).isRequired,
};

export default memo(Map, (prevProps, nextProps) =>
  prevProps.offers === nextProps.offers
);
