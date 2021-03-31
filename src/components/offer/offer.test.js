import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Offer from './offer';
import {Offers} from '../../mocks/mocks';
import {AuthorizationStatus} from '../../constants';

const mockStore = configureStore({});
const history = createMemoryHistory();
const mockDispatch = jest.fn();

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

it(`Offer should render correctly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });
  const offer = Offers[0];

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Offer offer={offer}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/€ 120/i)).toBeInTheDocument();
  expect(screen.getByText(/night/i)).toBeInTheDocument();
  expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  expect(screen.getByText(/Beautiful & luxurious apartment at great location/i)).toBeInTheDocument();
  expect(screen.getByText(`Apartment`)).toBeInTheDocument();
});
