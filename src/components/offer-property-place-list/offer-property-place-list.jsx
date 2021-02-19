import React from 'react';
import PropertyPlace from "../offer-property-place/offer-property-place";
import PropTypes from "prop-types";
import OfferProp from "../offer/offer.prop";

const PropertyPlaceList = ({offers}) => {
  const renderOffers = offers.slice(0, 3).map((item) => <PropertyPlace offers={item} key={item.id}/>);
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {renderOffers}
      </div>
    </section>
  );
};

PropertyPlaceList.propTypes = {
  offers: PropTypes.arrayOf(OfferProp).isRequired
};

export default PropertyPlaceList;
