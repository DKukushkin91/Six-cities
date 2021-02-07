import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import FavoritesScreen from '../favorites/favorites';
import LoginScreen from '../login/login';
import OfferPropertyScreen from '../offer-property/offer-property';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const App = ({cardsCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage cardsCount={cardsCount} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPropertyScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired
};

export default App;
