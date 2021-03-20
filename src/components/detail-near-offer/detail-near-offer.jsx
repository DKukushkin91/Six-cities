import React, {memo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Offer from '../offer/offer';
import OfferProp from '../offer/offer.prop';
import {changeActiveOffer} from '../../store/action';

const DetailNearOffer = ({offer}) => {
  const {previewImage, id} = offer;
  const activeCardId = useSelector((state) => state.PROCESS.activeCardId);
  const dispatch = useDispatch();

  const changeOffer = useCallback(() => {
    if (id !== activeCardId) {
      dispatch(changeActiveOffer(id));
    }
  }, [activeCardId]);


  return (
    <article onClick={changeOffer} className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`${previewImage}`} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      {<Offer offers={offer}/>}
    </article>
  );
};

DetailNearOffer.propTypes = {
  offer: OfferProp.isRequired
};

export default memo(DetailNearOffer, (prevProps, nextProps) =>
  prevProps.offer === nextProps.offer
);
