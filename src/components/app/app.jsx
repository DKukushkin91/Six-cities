import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login/login';
import OfferPropertyScreen from '../offer-property/offer-property-screen';
import NotFoundScreen from '../errors/not-found';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Paths} from '../../constants';
import OfferProp from '../offer/offer.prop';
import CityProp from "../map/coordinate-city.prop";
import PointsProp from "../map/coordinate-points.prop";
import ReviewsProp from "../reviews/review.prop";


const App = ({offersCount, offers, comments, city, points}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Paths.MAIN}>
          <MainPage
            offersCount={offersCount}
            offers={offers}
            city={city}
            points={points}
          />
        </Route>
        <Route exact path={Paths.FAVORITES}>
          <FavoritesScreen offers={offers}/>
        </Route>
        <Route exact path={Paths.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={Paths.OFFER}>
          <OfferPropertyScreen
            comments={comments}
            city={city}
            points={points}
            offers={offers}
          />
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
  offers: PropTypes.arrayOf(OfferProp).isRequired,
  comments: PropTypes.arrayOf(ReviewsProp).isRequired,
  city: CityProp,
  points: PointsProp
};

export default App;
