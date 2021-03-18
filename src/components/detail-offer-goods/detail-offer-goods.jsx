import React, {memo} from 'react';
import PropTypes from 'prop-types';

const DetailOfferGoods = ({goods}) => {
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
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default memo(DetailOfferGoods, (prevProps, nextProps) =>
  prevProps.goods === nextProps.goods
);
