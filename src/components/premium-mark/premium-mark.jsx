import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {componentNameProp} from '../component-name/component-name.prop';

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
  componentName: componentNameProp,
};

export default memo(PremiumMark, (prevProps, nextProps) =>
  prevProps.componentName === nextProps.componentName
);
