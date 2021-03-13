import React from 'react';
import {Link} from 'react-router-dom';
import OfferProp from './offer.prop';
import {getRatingPercent, getUpperCase} from '../../util';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {favoriteStatus} from "../../store/api-actions";

const Offer = ({offers, onChangeStatus}) => {
  const {price, title, type, isFavorite, rating, id} = offers;
  const handleClick = (evt) => {
    evt.preventDefault();
    onChangeStatus({
      id,
      favorite: isFavorite ? 0 : 1,
    });
  };
  const onFavorite = isFavorite ? `--active` : ``;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€ {price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button onClick={handleClick} className={`place-card__bookmark-button${onFavorite} button`} type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
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
  );
};

Offer.propTypes = {
  offers: OfferProp.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeStatus(data) {
    dispatch(favoriteStatus(data));
  }
});

export {Offer};
export default connect(``, mapDispatchToProps)(Offer);
