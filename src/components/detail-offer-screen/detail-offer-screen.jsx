import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import DetailOfferReview from '../detail-offer-review/detail-offer-review';
import DetailNearOfferList from '../detail-near-offer-list/detail-near-offer-list';
import Map from '../map/map';
import currentLocationProp from '../map/current-location.prop';
import OfferProp from '../offer/offer.prop';
import {connect} from 'react-redux';
import {getNearestOffers, getRatingPercent, getUpperCase} from '../../util';
import comments from '../../mocks/comments';
import DetailOfferGoods from '../detail-offer-goods/detail-offer-goods';
import DetailOfferGallery from '../detail-offer-gallery/detail-offer-gallery';
import Header from '../header/header';
import DetailOfferHost from "../detail-offer-host/detail-offer-host";

const DetailOfferScreen = ({offers, currentLocation, match, userValue}) => {
  const offerId = Number(match.params.id);
  const offer = offers.find((item)=>item.id === offerId);
  const {title, rating, type, bedrooms, maxAdults, price, isPremium, images, goods} = offer;
  const nearOffers = getNearestOffers(offers, offer);
  const renderOfferPropertyReviews = (<DetailOfferReview comments={comments}/>);
  const renderOfferPropertyPlaceList = (<DetailNearOfferList offers={offers} offer={offer}/>);
  const renderMap = (<Map offers={nearOffers} currentLocation={currentLocation}/>);
  const renderGoods = (<DetailOfferGoods goods={goods}/>);
  const renderGallery = (<DetailOfferGallery images={images}/>);
  const renderHeader = (<Header userValue={userValue}/>);
  const renderHost = (<DetailOfferHost offer={offer}/>);
  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        {renderHeader}
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {renderGallery}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : ``}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
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
                  {renderGoods}
                </div>
                {renderHost}
                {renderOfferPropertyReviews}
              </div>
            </div>
            <section className="property__map map">
              {renderMap}
            </section>
          </section>
          <div className="container">
            {renderOfferPropertyPlaceList}
          </div>
        </main>
      </div>
    </>
  );
};


DetailOfferScreen.propTypes = {
  offers: PropTypes.arrayOf(OfferProp).isRequired,
  userValue: PropTypes.string.isRequired,
  currentLocation: currentLocationProp,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = ({currentLocation, offers, userValue}) => ({
  currentLocation,
  offers,
  userValue
});

export {DetailOfferScreen};
export default connect(mapStateToProps, null)(withRouter(DetailOfferScreen));
