import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const LocationsList = ({cities, onChangeCity, currentCity}) => {
  const changeLocation = (evt, item) => {
    evt.preventDefault();
    if (item !== currentCity) {
      onChangeCity(item);
    }
  };
  const activeLocation = (item) => item === currentCity ? `tabs__item--active` : ``;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => (
        <li key={item} className="locations__item">
          <a onClick={(evt)=> changeLocation(evt, item)} className={`locations__item-link tabs__item ${activeLocation(item)}`} href="#">
            <span>{item}</span>
          </a>
        </li>
      )
      )}
    </ul>
  );
};

LocationsList.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapStateToProps = ({city}) => ({city});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
