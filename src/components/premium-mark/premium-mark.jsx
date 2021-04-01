import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = ({isPremium, componentName}) => {

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
  isPremium: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired,
};

export default PremiumMark;
