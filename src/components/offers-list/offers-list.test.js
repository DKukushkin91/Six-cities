import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import OffersList from './offers-list';
import {Offers} from "../../mocks/mocks";
import {AuthorizationStatus} from "../../constants";

const mockStore = configureStore({});
const history = createMemoryHistory();

it(`OffersList should render correctly`, () => {
  const store = mockStore({
    PROCESS: {
      activeCardId: Offers[0].id
    },
    USER: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });
  const offers = Offers;

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <OffersList offers={offers}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Beautiful & luxurious apartment at great location/i)).toBeInTheDocument();
});
