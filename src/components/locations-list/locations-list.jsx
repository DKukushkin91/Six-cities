import React from 'react';
import LocationProp from '../location/location.prop';
import Location from '../location/location';
import PropTypes from 'prop-types';

const LocationsList = ({cities, onChangeCity, currentCity}) => {
  const renderItem = cities.map((item) => <Location cities={item} onChangeCity={onChangeCity} currentCity={currentCity} key={item.name}/>);
  return (
    <ul className="locations__list tabs__list">
      {renderItem}
    </ul>
  );
};

LocationsList.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(LocationProp).isRequired
};

export default LocationsList;
