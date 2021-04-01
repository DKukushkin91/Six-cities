import React, {memo} from 'react';
import {getUpperCase} from "../../util";
import PropTypes from 'prop-types';

const DetailFeatures = ({type, bedrooms, maxAdults}) => {
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
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired
};

export default memo(DetailFeatures, (prevProps, nextProps) =>
  prevProps.offers === nextProps.offers
);
