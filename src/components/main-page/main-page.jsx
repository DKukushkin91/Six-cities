import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';
import {SORTING_LIST, CITIES_LIST} from '../../constants';
import Header from '../header/header';
import Map from '../map/map';
import OfferProp from '../offer/offer.prop';
import LocationsList from '../locations-list/locations-list';
import {connect} from 'react-redux';
import OfferSorting from '../offer-sorting/offer-sorting';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOfferList} from '../../store/api-actions';

const MainPage = ({offers, currentCity, isDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <div className="page page--gray page--main">
        {<Header/>}
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              {<LocationsList cities={CITIES_LIST} currentCity={currentCity}/>}
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {currentCity}</b>
                {<OfferSorting options={SORTING_LIST}/>}
                <div className="cities__places-list places__list tabs__content">
                  {<OffersList offers={offers}/>}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {<Map offers={offers}/>}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(OfferProp.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  userValue: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = ({currentOffers, currentCity, isDataLoaded, userValue, authorizationStatus}) => ({
  offers: currentOffers,
  currentCity,
  isDataLoaded,
  userValue,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOfferList());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
