import React from 'react';
import Favorite from '../favorites/favorite';
import {Link} from 'react-router-dom';
import {Paths} from '../../constants';
import OfferProp from "../offer/offer.prop";

const FavoritesList = ({offers}) => {
  const renderFavorites = offers.map((item) => <Favorite offers={item} key={item.id}/>);
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
  offers: OfferProp
};

export default FavoritesList;
