import React from 'react';
import OfferProp from '../offer/offer.prop';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const PremiumMark = ({offers, isLoaded}) => {
  const {isPremium} = offers;

  return (
    <>
      {isPremium ?
        <div className={`${isLoaded ? `property` : `place-card`}__mark`}>
          <span>Premium</span>
        </div>
        :
        ``}
    </>
  );
};

PremiumMark.propTypes = {
  offers: OfferProp.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({isLoaded}) => ({
  isLoaded
});

export {PremiumMark};
export default connect(mapStateToProps, ``)(PremiumMark);
