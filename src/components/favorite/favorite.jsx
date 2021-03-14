import React from 'react';
import {Link} from 'react-router-dom';
import OfferProp from "../offer/offer.prop";
import {getRatingPercent, getUpperCase} from "../../util";
import FavoriteButton from "../favorite-button/favorite-button";

const Favorite = ({offers}) => {
  const {previewImage, price, title, type, rating, id} = offers;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton offers={offers}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingPercent(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{getUpperCase(type)}</p>
      </div>
    </article>
  );
};

Favorite.propTypes = {
  offers: OfferProp.isRequired
};

export default Favorite;
