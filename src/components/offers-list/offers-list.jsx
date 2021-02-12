import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer';

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
  offers: PropTypes.array.isRequired
};

export default OffersList;
