import React from 'react';
import PropTypes from 'prop-types';
import Favorites from '../favorites/favorites';
import {Link} from 'react-router-dom';
import {Paths} from '../../constants';

const FavoritesList = ({offers}) => {
  const renderFavorites = offers.map((item) => <Favorites offers={item} key={item.id}/>);
  const cities = [...new Set(offers.map((item) => item.city.name))];
  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link to={Paths.MAIN} className="locations__item-link">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {renderFavorites}
          </div>
        </li>
      ))};
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesList;
