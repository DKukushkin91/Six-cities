import React, {memo} from 'react';
import DetailNearOffer from '../detail-near-offer/detail-near-offer';
import PropTypes from 'prop-types';
import OfferProp from '../offer/offer.prop';

const DetailNearOfferList = ({offer}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offer.map((item) =>
          <DetailNearOffer offer={item} key={item.id}/>
        )}
      </div>
    </section>
  );
};

DetailNearOfferList.propTypes = {
  offer: PropTypes.arrayOf(OfferProp.isRequired).isRequired
};

export default memo(DetailNearOfferList, (prevProps, nextProps) =>
  prevProps.offer === nextProps.offer
);
