import React from 'react';
import PropTypes from 'prop-types';

const DetailOfferGoods = ({offer}) => {
  const {goods} = offer;
  return (
    <>
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((item)=> (
          <li key={item} className="property__inside-item">
            {item}
          </li>)
        )}
      </ul>
    </>
  );
};

DetailOfferGoods.propTypes = {
  offer: PropTypes.object.isRequired
};

export default DetailOfferGoods;
