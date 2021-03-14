import React from 'react';
import PropTypes from 'prop-types';
import {changeCity} from '../../store/action';
import {useDispatch} from 'react-redux';

const LocationsList = ({cities, currentCity}) => {
  const dispatch = useDispatch();
  const changeLocation = (evt, item) => {
    evt.preventDefault();
    if (item !== currentCity) {
      dispatch(changeCity(item));
    }
  };
  const activeLocation = (item) => item === currentCity ? `tabs__item--active` : ``;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => (
        <li key={item} className="locations__item">
          <a onClick={(evt)=> changeLocation(evt, item)}
            className={`locations__item-link tabs__item ${activeLocation(item)}`} href="#">
            <span>{item}</span>
          </a>
        </li>
      )
      )}
    </ul>
  );
};

LocationsList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default LocationsList;
