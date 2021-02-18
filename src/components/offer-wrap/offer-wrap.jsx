import React from 'react';
import {Link} from 'react-router-dom';
import {Paths} from '../../constants';
import OfferProp from '../offer/offer.prop';
import Offer from '../offer/offer';

const OfferWrap = ({offers}) => {
  const {images, isPremium} = offers;
  const renderOffers = (<Offer offers={offers}/>);

  return (
    <article className="cities__place-card place-card">
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={Paths.OFFER}>
          <img className="place-card__image" src={`${images[0]}`} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      {renderOffers}
    </article>
  );
};

OfferWrap.propTypes = {
  offers: OfferProp
};

export default OfferWrap;
