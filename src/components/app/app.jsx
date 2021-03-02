import React from 'react';
import MainPage from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login/login';
import DetailOfferScreen from '../detail-offer-screen/detail-offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Paths} from '../../constants';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Paths.MAIN}>
          <MainPage
          />
        </Route>
        <Route exact path={Paths.FAVORITES}>
          <FavoritesScreen/>
        </Route>
        <Route exact path={Paths.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={Paths.OFFER}>
          <DetailOfferScreen/>;
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
