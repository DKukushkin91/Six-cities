import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login/login';
import DetailOfferScreen from '../detail-offer-screen/detail-offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Paths} from '../../constants';
import OfferProp from '../offer/offer.prop';
import ReviewsProp from '../reviews/review.prop';

const App = ({offers, comments, cities, options}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Paths.MAIN}>
          <MainPage
            offers={offers}
            cities={cities}
            options={options}
          />
        </Route>
        <Route exact path={Paths.FAVORITES}>
          <FavoritesScreen offers={offers}/>
        </Route>
        <Route exact path={Paths.LOGIN}>
          <LoginScreen />
        </Route>
        <Route render={({match})=>{
          const offer = offers.find((item)=>item.id === match.params.id);
          return <DetailOfferScreen
            offer={offer}
            comments={comments}
            offers={offers}
          />;
        }} exact path={Paths.OFFER}>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.array.isRequired,
  offers: PropTypes.arrayOf(OfferProp).isRequired,
  comments: PropTypes.arrayOf(ReviewsProp).isRequired,
  options: PropTypes.array.isRequired
};

export default App;
