import React from 'react';
import {Link} from 'react-router-dom';
import Offer from '../offer/offer';
import {Paths} from '../../constants';
import OfferProp from '../offer/offer.prop';

const PropertyPlace = ({offers}) => {
  const {images} = offers;
  const renderOffer = (<Offer offers={offers}/>);
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={Paths.OFFER}>
          <img className="place-card__image" src={`${images[0]}`} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      {renderOffer}
    </article>
  );
};

PropertyPlace.propTypes = {
  offers: OfferProp
};

export default PropertyPlace;
