import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login/login';
import OfferPropertyScreen from '../offer-property/offer-property-screen';
import NotFoundScreen from '../errors/not-found';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Paths} from '../../constants';

const App = ({offersCount, offers, comments}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Paths.MAIN}>
          <MainPage
            offersCount={offersCount}
            offers={offers}
          />
        </Route>
        <Route exact path={Paths.FAVORITES}>
          <FavoritesScreen offers={offers}/>
        </Route>
        <Route exact path={Paths.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={Paths.OFFER}>
          <OfferPropertyScreen comments={comments}/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired
};

export default App;
