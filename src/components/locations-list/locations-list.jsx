import React from 'react';
import LocationProp from '../location/location.prop';
import Location from '../location/location';
import PropTypes from 'prop-types';

const LocationsList = ({cities, currentCity}) => {
  const renderItem = cities.map((item) => <Location cities={item} currentCity={currentCity} key={item.id}/>);
  return (
    <ul className="locations__list tabs__list">
      {renderItem}
    </ul>
  );
};

LocationsList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(LocationProp).isRequired
};

export default LocationsList;
