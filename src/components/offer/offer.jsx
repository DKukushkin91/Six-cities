import React from 'react';
import {Link} from 'react-router-dom';
import OfferProp from './offer.prop';
import {Rating} from '../../constants';

const Offer = ({offers}) => {
  const {price, title, type, isFavorite, rating} = offers;
  const classButton = `place-card__bookmark-button`;
  const onFavorite = isFavorite ? {classButton} : `${classButton}--active`;
  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€ {price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className={`${onFavorite} button`} type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${Number(rating / Rating.MAX) * Rating.PERCENT}%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offers.id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
};

Offer.propTypes = {
  offers: OfferProp
};

export default Offer;
