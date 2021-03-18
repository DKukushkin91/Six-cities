import React, {memo} from 'react';
import {getUpperCase} from "../../util";
import OfferProp from '../offer/offer.prop';

const DetailFeatures = ({offers}) => {
  const {type, bedrooms, maxAdults} = offers;
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {getUpperCase(type)}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
};

DetailFeatures.propTypes = {
  offers: OfferProp.isRequired
};

export default memo(DetailFeatures, (prevProps, nextProps) =>
  prevProps.offers === nextProps.offers
);
