import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import OfferProp from './offer.prop';
import {getUpperCase} from '../../util';
import FavoriteButton from '../favorite-button/favorite-button';
import {ComponentName, FavoriteButtonSize} from '../../constants';
import Rating from '../rating/rating';

const Offer = ({offer}) => {
  const {price, title, type, id, rating, isFavorite} = offer;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€ {price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <FavoriteButton
          isFavorite={isFavorite}
          id={id}
          componentName={ComponentName.PLACE_CARD}
          buttonSize={FavoriteButtonSize.Place}
        />
      </div>
      <Rating
        rating={rating}
        componentName={ComponentName.PLACE_CARD}
      />
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{getUpperCase(type)}</p>
    </div>
  );
};

Offer.propTypes = {
  offer: OfferProp.isRequired,
};

export default memo(Offer, (prevProps, nextProps) =>
  prevProps.offer === nextProps.offer
);
