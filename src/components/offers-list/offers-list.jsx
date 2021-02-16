import React from 'react';
import Offer from '../offer/offer';
import OfferProp from '../offer/offer.prop';
import PropTypes from "prop-types";

const OffersList = ({offers}) => {
  const renderOffers = offers.map((item) => <Offer offers={item} key={item.id}/>);
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
