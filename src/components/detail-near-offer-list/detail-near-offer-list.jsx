import React from 'react';
import DetailNearOffer from '../detail-near-offer/detail-near-offer';
import PropTypes from "prop-types";
import OfferProp from "../offer/offer.prop";
import {getNearestOffers} from '../../util';

const DetailNearOfferList = ({offers, offer}) => {
  const renderOffers = getNearestOffers(offers, offer).map((item) => <DetailNearOffer offer={item} key={item.id}/>);
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {renderOffers}
      </div>
    </section>
  );
};

DetailNearOfferList.propTypes = {
  offers: PropTypes.arrayOf(OfferProp).isRequired,
  offer: OfferProp
};

export default DetailNearOfferList;
