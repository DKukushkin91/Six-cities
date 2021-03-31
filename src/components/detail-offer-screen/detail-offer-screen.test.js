import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import DetailOfferScreen from './detail-offer-screen';
import {Offers} from '../../mocks/mocks';
import {AuthorizationStatus, DEFAULT_LOCATION} from '../../constants';

const mockStore = configureStore({});

const match = {
  params: {
    id: `1`
  }
};

const history = createMemoryHistory();
const mockDispatch = jest.fn();

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

describe(`Test DetailOfferScreen`, () => {
  it(`Should call useDispatch 3 times`, () => {
    const store = mockStore({
      DATA: {
        offerDetails: Offers[0],
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <DetailOfferScreen.WrappedComponent match={match}/>
          </Router>
        </redux.Provider>
    );

    expect(mockDispatch).toBeCalledTimes(3);
  });

  it(`DetailOfferScreen should render correctly`, () => {
    const route = `/offer/1`;
    const store = mockStore({
      DATA: {
        offerDetails: Offers[0],
        isLoaded: true,
        nearbyOffers: [],
        comments: [],
        currentLocation: DEFAULT_LOCATION,
      },
      PROCESS: {activeCardId: Offers[0].id},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}
    });

    history.push(route);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <DetailOfferScreen.WrappedComponent match={match}/>
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/adults/i)).toBeInTheDocument();
  });
});
