import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import DetailOfferReview from '../detail-offer-review/detail-offer-review';
import DetailNearOfferList from '../detail-near-offer-list/detail-near-offer-list';
import Map from '../map/map';
import DetailOfferGoods from '../detail-offer-goods/detail-offer-goods';
import DetailOfferGallery from '../detail-offer-gallery/detail-offer-gallery';
import DetailOfferHost from '../detail-offer-host/detail-offer-host';
import OfferProp from '../offer/offer.prop';
import PremiumMark from '../premium-mark/premium-mark';
import DetailFeatures from '../detail-offer-features/detail-features';
import {ComponentName, FavoriteButtonSize} from '../../constants';
import FavoriteButton from '../favorite-button/favorite-button';
import Rating from '../rating/rating';

const DetailOffer = ({offerDetails}) => {
  const comments = useSelector((state) => state.DATA.comments);
  const nearbyOffers = useSelector((state) => state.DATA.nearbyOffers);
  const {
    id,
    title,
    price,
    images,
    goods,
    rating,
    isFavorite,
    isPremium,
    type,
    bedrooms,
    maxAdults,
    description,
    host
  } = offerDetails;
  const detailsNearbyOffers = [...nearbyOffers, offerDetails];

  return (
    <>
      <section className="property">
        <DetailOfferGallery images={images}/>
        <div className="property__container container">
          <div className="property__wrapper">
            <PremiumMark isPremium={isPremium} componentName={ComponentName.PROPERTY}/>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <FavoriteButton
                isFavorite={isFavorite}
                id={id}
                componentName={ComponentName.PROPERTY}
                buttonSize={FavoriteButtonSize.Property}
              />
            </div>
            <Rating
              rating={rating}
              componentName={ComponentName.PROPERTY}
            />
            <DetailFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <DetailOfferGoods goods={goods}/>
            </div>
            <DetailOfferHost description={description} host={host}/>
            <DetailOfferReview offerId={id} comments={comments}/>
          </div>
        </div>
        <section className="property__map map">
          <Map offers={detailsNearbyOffers} offerDetails={offerDetails}/>
        </section>
      </section>
      <div className="container">
        <DetailNearOfferList offer={nearbyOffers}/>
      </div>
    </>
  );
};

DetailOffer.propTypes = {
  offerDetails: OfferProp,
};

export default memo(DetailOffer, (prevProps, nextProps) =>
  prevProps.offerDetails === nextProps.offerDetails
);
