import React from 'react';
import {getRatingPercent} from "../../util";
import {componentNameProp} from "../component-name/component-name";
import offerProp from '../offer/offer.prop';
import {ComponentName} from '../../constants';

const Rating = ({offers, componentName}) => {
  const {rating} = offers;
  return (
    <div className={`${componentName}__rating rating`}>
      <div className={`${componentName}__stars rating__stars`}>
        <span style={{width: `${getRatingPercent(rating)}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      {componentName === ComponentName.PROPERTY ?
        <span className="property__rating-value rating__value">{rating}</span>
        :
        ``
      }
    </div>
  );
};

Rating.propTypes = {
  offers: offerProp.isRequired,
  componentName: componentNameProp
};

export default Rating;
