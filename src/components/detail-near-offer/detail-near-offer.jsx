import React from 'react';
import {Link} from 'react-router-dom';
import Offer from '../offer/offer';
import OfferProp from '../offer/offer.prop';

const DetailNearOffer = ({offer}) => {
  const {previewImage, id} = offer;
  const renderOffer = (<Offer offers={offer}/>);
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`${previewImage}`} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      {renderOffer}
    </article>
  );
};

DetailNearOffer.propTypes = {
  offer: OfferProp.isRequired
};

export default DetailNearOffer;
