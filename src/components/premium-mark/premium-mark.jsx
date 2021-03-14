import React from 'react';
import OfferProp from '../offer/offer.prop';
import {componentNameProp} from "../component-name/component-name";

const PremiumMark = ({offers, componentName}) => {
  const {isPremium} = offers;

  return (
    <>
      {isPremium ?
        <div className={`${componentName}__mark`}>
          <span>Premium</span>
        </div>
        :
        ``}
    </>
  );
};

PremiumMark.propTypes = {
  offers: OfferProp.isRequired,
  componentName: componentNameProp,
};

export default PremiumMark;
