import React from 'react';
import {Link} from 'react-router-dom';
import OfferProp from '../offer/offer.prop';
import Offer from '../offer/offer';
import PropTypes from 'prop-types';
import PremiumMark from '../premium-mark/premium-mark';
import {ComponentName} from '../../constants';

const OfferCard = ({offers, onMouseOver}) => {
  const {previewImage, id} = offers;

  return (
    <article onMouseOver={onMouseOver} className="cities__place-card place-card">
      <PremiumMark offers={offers} componentName={ComponentName.PLACE_CARD}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`${previewImage}`} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      {<Offer offers={offers}/>}
    </article>
  );
};

OfferCard.propTypes = {
  offers: OfferProp.isRequired,
  onMouseOver: PropTypes.func.isRequired
};

export default OfferCard;
