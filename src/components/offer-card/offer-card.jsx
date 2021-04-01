import React, {memo, useCallback} from 'react';
import {Link} from 'react-router-dom';
import OfferProp from '../offer/offer.prop';
import Offer from '../offer/offer';
import PremiumMark from '../premium-mark/premium-mark';
import {ComponentName} from '../../constants';
import {useDispatch, useSelector} from "react-redux";
import {changeActiveOffer} from "../../store/action";

const OfferCard = ({offer}) => {
  const {previewImage, id, isPremium} = offer;
  const activeCardId = useSelector((state) => state.PROCESS.activeCardId);
  const dispatch = useDispatch();

  const changeOffer = useCallback(() => {
    if (id !== activeCardId) {
      dispatch(changeActiveOffer(id));
    }
  }, [activeCardId]);

  return (
    <article onMouseOver={changeOffer} className="cities__place-card place-card">
      <PremiumMark isPremium={isPremium} componentName={ComponentName.PLACE_CARD}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`${previewImage}`} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <Offer offer={offer}/>
    </article>
  );
};

OfferCard.propTypes = {
  offer: OfferProp.isRequired,
};

export default memo(OfferCard, (prevProps, nextProps) =>
  prevProps.offer === nextProps.offer
);
