import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Paths} from '../../constants';

const Favorites = ({offers}) => {
  const {images, price, title, type} = offers;
  return (

    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={Paths.OFFER}>
          <img className="place-card__image" src={`${images[1]}`} width={150} height={110} alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `100%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={Paths.OFFER}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Favorites.propTypes = {
  offers: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    images: PropTypes.array,
  }).isRequired
};

export default Favorites;
