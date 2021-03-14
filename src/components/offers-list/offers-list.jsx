import React from 'react';
import OfferProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import {useDispatch, useSelector} from 'react-redux';
import {hoverOffer} from '../../store/action';

const OffersList = ({offers}) => {
  const {activeCardId} = useSelector((state) => state.PROCESS);
  const dispatch = useDispatch();
  const changeOffer = (evt, id) => {
    evt.preventDefault();
    if (id !== activeCardId) {
      dispatch(hoverOffer(id));
    }
  };

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((item) =>
            <OfferCard onMouseOver={((evt)=>
              changeOffer(evt, item.id))} offers={item} key={item.id}/>
          )}
      </div>
    </>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferProp).isRequired,
};

export default OffersList;
