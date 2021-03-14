import React from 'react';
import {getRatingPercent, getUpperCase} from '../../util';
import DetailOfferReview from '../detail-offer-review/detail-offer-review';
import DetailNearOfferList from '../detail-near-offer-list/detail-near-offer-list';
import Map from '../map/map';
import DetailOfferGoods from '../detail-offer-goods/detail-offer-goods';
import DetailOfferGallery from '../detail-offer-gallery/detail-offer-gallery';
import DetailOfferHost from '../detail-offer-host/detail-offer-host';
import PropTypes from 'prop-types';
import ReviewProp from '../reviews/review.prop';
import OfferProp from '../offer/offer.prop';
import currentLocationProp from '../map/current-location.prop';
import {connect} from 'react-redux';
import PremiumMark from '../premium-mark/premium-mark';

const DetailOffer = ({offerDetails, comments, currentLocation, nearbyOffers}) => {
  const {id, title, rating, type, bedrooms, maxAdults, price, images, goods, isFavorite} = offerDetails;

  return (
    <>
      <section className="property">
        {<DetailOfferGallery images={images}/>}
        <div className="property__container container">
          <div className="property__wrapper">
            <PremiumMark offers={offerDetails}/>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={`property__bookmark-button${isFavorite ? `--active` : ``} button`} type="button">
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${getRatingPercent(rating)}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {getUpperCase(type)}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
              </li>
            </ul>
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
  comments: PropTypes.arrayOf(ReviewProp).isRequired,
  offerDetails: OfferProp,
  nearbyOffers: PropTypes.arrayOf(OfferProp).isRequired,
  currentLocation: currentLocationProp,
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({currentLocation, isLoaded, comments, nearbyOffers}) => ({
  currentLocation,
  isLoaded,
  comments,
  nearbyOffers
});

export {DetailOffer};
export default connect(mapStateToProps, ``)(DetailOffer);
