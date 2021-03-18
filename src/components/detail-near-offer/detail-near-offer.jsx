import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import Offer from '../offer/offer';
import OfferProp from '../offer/offer.prop';

const DetailNearOffer = ({offer}) => {
  const {previewImage, id} = offer;

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`${previewImage}`} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      {<Offer offers={offer}/>}
    </article>
  );
};

DetailNearOffer.propTypes = {
  offer: OfferProp.isRequired
};

export default memo(DetailNearOffer, (prevProps, nextProps) =>
  prevProps.offer === nextProps.offer
);
