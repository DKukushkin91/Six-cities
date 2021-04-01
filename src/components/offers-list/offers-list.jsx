import React, {memo} from 'react';
import OfferProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

const OffersList = ({offers}) => {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item) =>
          <OfferCard offer={item} key={`place-cad-${item.id}`}/>
        )}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferProp).isRequired,
};

export default memo(OffersList, (prevProps, nextProps) =>
  prevProps.offers === nextProps.offers
);
