import React, {memo} from 'react';
import FavoritesPlaces from '../favorite-places/favorite-places';
import {Link} from 'react-router-dom';
import {Path} from '../../constants';
import OfferProp from '../offer/offer.prop';
import PropTypes from 'prop-types';

const FavoritesList = ({favorites}) => {
  const cities = [...new Set(favorites.map((item) => item.city.name))];

  return (
    <ul data-testid="favorites__list-test" className="favorites__list">

      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link to={Path.MAIN} className="locations__item-link">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <FavoritesPlaces favorites={favorites.filter((item) => item.city.name === city)}/>
        </li>
      ))}

    </ul>
  );
};


FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(OfferProp.isRequired).isRequired,
};

export default memo(FavoritesList, (prevProps, nextProps) =>
  prevProps.favorites === nextProps.favorites
);
