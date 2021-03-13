import React from 'react';
import OfferProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import OfferWrap from '../offer-wrap/offer-wrap';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const OffersList = ({offers, onHoverOffer, activeCardId}) => {
  const changeOffer = (evt, id) => {
    evt.preventDefault();
    if (id !== activeCardId) {
      onHoverOffer(id);
    }
  };
  const renderOffers = offers.map((item) => <OfferWrap onMouseOver={((evt)=> changeOffer(evt, item.id))} offers={item} key={item.id}/>);
  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {renderOffers}
      </div>
    </>
  );
};

OffersList.propTypes = {
  onHoverOffer: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(OfferProp).isRequired,
  activeCardId: PropTypes.number
};

const mapStateToProps = ({activeCardId}) => ({activeCardId});

const mapDispatchToProps = (dispatch) => ({
  onHoverOffer(id) {
    dispatch(ActionCreator.hoverOffer(id));
  }
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
