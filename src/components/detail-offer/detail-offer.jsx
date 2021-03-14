import React from 'react';
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
  const {comments, currentLocation, nearbyOffers} = useSelector((state) => state.DATA);
  const {id, title, price, images, goods, rating} = offerDetails;

  return (
    <>
      <section className="property">
        {<DetailOfferGallery images={images}/>}
        <div className="property__container container">
          <div className="property__wrapper">
            <PremiumMark offers={offerDetails} componentName={ComponentName.PROPERTY}/>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <FavoriteButton
                offers={offerDetails}
                componentName={ComponentName.PROPERTY}
                buttonSize={FavoriteButtonSize.Property}
              />
            </div>
            <Rating
              rating={rating}
              componentName={ComponentName.PROPERTY}
            />
            <DetailFeatures offers={offerDetails}/>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              {<DetailOfferGoods goods={goods}/>}
            </div>
            {<DetailOfferHost offer={offerDetails}/>}
            {<DetailOfferReview offerId={id} comments={comments}/>}
          </div>
        </div>
        <section className="property__map map">
          {<Map offers={nearbyOffers} currentLocation={currentLocation}/>}
        </section>
      </section>
      <div className="container">
        {<DetailNearOfferList offer={nearbyOffers}/>}
      </div>
    </>
  );
};

DetailOffer.propTypes = {
  offerDetails: OfferProp,
};

export default DetailOffer;
