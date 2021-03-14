import React from 'react';
import Favorite from "../favorite/favorite";
import PropTypes from 'prop-types';
import OfferProp from '../offer/offer.prop';

const FavoritePlaces = ({favorites}) => {

  return (
    <div className="favorites__places">
      {favorites.map((item) => <Favorite offers={item} key={item.id}/>)}
    </div>
  );
};

FavoritePlaces.propTypes = {
  favorites: PropTypes.arrayOf(OfferProp.isRequired).isRequired
};

export default FavoritePlaces;
