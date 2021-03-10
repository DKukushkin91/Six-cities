import React from 'react';
import {Link} from 'react-router-dom';
import OfferProp from '../offer/offer.prop';
import Offer from '../offer/offer';
import PropTypes from 'prop-types';

const OfferWrap = ({offers, onMouseOver}) => {
  const {previewImage, isPremium, id} = offers;
  const renderOffers = (<Offer offers={offers}/>);

  return (
    <article onMouseOver={onMouseOver} className="cities__place-card place-card">
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`${previewImage}`} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      {renderOffers}
    </article>
  );
};

OfferWrap.propTypes = {
  offers: OfferProp.isRequired,
  onMouseOver: PropTypes.func.isRequired
};

export default OfferWrap;
