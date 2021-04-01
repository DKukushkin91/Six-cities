import React, {memo} from 'react';
import {getRatingPercent} from "../../util";
import PropTypes from 'prop-types';
import {ComponentName} from '../../constants';

const Rating = ({rating, componentName}) => {
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
  rating: PropTypes.number.isRequired,
  componentName: PropTypes.string.isRequired,
};

export default memo(Rating, (prevProps, nextProps) =>
  prevProps.rating === nextProps.rating
);
