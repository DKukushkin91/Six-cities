import React from 'react';
import OfferProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import OfferWrap from '../offer-wrap/offer-wrap';

const OffersList = ({offers}) => {
  const renderOffers = offers.map((item) => <OfferWrap offers={item} key={item.id}/>);
  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {renderOffers}
      </div>
    </>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferProp).isRequired
};

export default OffersList;
