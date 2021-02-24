import React from 'react';
import LocationProp from '../location/location.prop';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const Location = ({cities, onChangeCity, currentCity}) => {
  const {name, id} = cities;
  const handleClick = (evt) => {
    evt.preventDefault();
    onChangeCity(evt.target.textContent);
  };

  const active = name === currentCity ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a onClick={handleClick} id={id} className={`locations__item-link tabs__item ${active}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
};

Location.propTypes = {
  cities: LocationProp,
  onChangeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = ({city}) => ({city});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(cityList) {
    dispatch(ActionCreator.changeCity(cityList));
  }
});

export {Location};
export default connect(mapStateToProps, mapDispatchToProps)(Location);
