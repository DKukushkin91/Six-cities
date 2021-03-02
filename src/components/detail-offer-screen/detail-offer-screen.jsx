import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import DetailOfferReview from '../detail-offer-review/detail-offer-review';
import PropertyPlaceList from '../detail-near-offer-list/offer-property-place-list';
import Map from '../map/map';
import currentLocationProp from '../map/current-location.prop';
import OfferProp from '../offer/offer.prop';
import {connect} from 'react-redux';
import {getNearestOffers} from '../../util';
import comments from '../../mocks/comments';
import DetailOfferGoods from '../detail-offer-goods/detail-offer-goods';
import DetailOfferGallery from '../detail-offer-gallery/detail-offer-gallery';
import {Rating} from '../../constants';

const DetailOfferScreen = ({offers, currentLocation, match}) => {
  const matchParam = Number(match.params.id);
  const offer = offers.find((item)=>item.id === matchParam);
  const {title, rating, type, bedrooms, maxAdults, price, isPremium} = offer;
  const nearOffers = getNearestOffers(offers, offer);
  const renderOfferPropertyReviews = (<DetailOfferReview comments={comments}/>);
  const renderOfferPropertyPlaceList = (<PropertyPlaceList offers={offers} offer={offer}/>);
  const renderMap = (<Map offers={nearOffers} currentLocation={currentLocation}/>);
  const renderGoods = (<DetailOfferGoods offer={offer}/>);
  const renderGallery = (<DetailOfferGallery offer={offer}/>);
  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
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
                    <span style={{width: `${Number(rating / Rating.MAX) * Rating.PERCENT}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
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
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                  Angelina
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
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
  currentLocation: currentLocationProp,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = ({currentLocation, offers}) => ({
  currentLocation,
  offers
});

export {DetailOfferScreen};
export default connect(mapStateToProps, null)(withRouter(DetailOfferScreen));
