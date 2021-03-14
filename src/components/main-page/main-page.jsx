import React, {useEffect} from 'react';
import OffersList from '../offers-list/offers-list';
import {SORTING_LIST, CITIES_LIST} from '../../constants';
import Header from '../header/header';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import {useSelector, useDispatch} from 'react-redux';
import OfferSorting from '../offer-sorting/offer-sorting';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOfferList} from '../../store/api-actions';

const MainPage = () => {
  const {currentOffers, currentCity, isDataLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchOfferList());
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
                <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
                {<OfferSorting options={SORTING_LIST}/>}
                <div className="cities__places-list places__list tabs__content">
                  {<OffersList offers={currentOffers}/>}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {<Map offers={currentOffers}/>}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
