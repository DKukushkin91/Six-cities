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
  const renderOffers = (<OffersList offers={offers}/>);
  const renderMap = (<Map offers={offers}/>);
  const renderLocationsList = (<LocationsList cities={CITIES_LIST} currentCity={currentCity}/>);
  const renderOfferSorting = (<OfferSorting options={SORTING_LIST}/>);
  const renderHeader = (<Header/>);

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
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        {renderHeader}
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              {renderLocationsList}
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {currentCity}</b>
                {renderOfferSorting}
                <div className="cities__places-list places__list tabs__content">
                  {renderOffers}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {renderMap}
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
  authorizationStatus: PropTypes.bool.isRequired
};

const mapStateToProps = ({currentOffers, currentCity, isDataLoaded, userValue, authorizationStatus}) => ({
  offers: currentOffers,
  currentCity,
  isDataLoaded,
  userValue,
  authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOfferList());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
