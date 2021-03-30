import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import MainPage from './main-page';
import {Offers} from '../../mocks/mocks';
import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_LOCATION} from '../../constants';

const mockStore = configureStore({});

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));
const history = createMemoryHistory();
const mockDispatch = jest.fn();

describe(`Test MainPage`, () => {
  it(`Should render LoadingScreen when data is not loaded`, () => {
    const store = mockStore({
      DATA: {
        isDataLoaded: false,
        offers: [],
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MainPage/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Loading...`)).toBeInTheDocument();
  });

  it(`Should render MainEmpty when data is loaded and offers is empty array`, () => {
    const store = mockStore({
      DATA: {
        isDataLoaded: true,
        offers: [],
        currentOffers: [],
        currentCity: DEFAULT_CITY
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MainPage/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Paris/i)).toBeInTheDocument();
  });

  it(`Should correctly render when data is loaded and offers not empty`, () => {
    const store = mockStore({
      DATA: {
        isDataLoaded: true,
        currentOffers: Offers.map((item) => {
          item.city.name = `Paris`;
          return item;
        }),
        currentLocation: DEFAULT_LOCATION,
        currentCity: DEFAULT_CITY
      },
      PROCESS: {
        activeCardId: Offers[0].id
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MainPage/>
          </Router>
        </redux.Provider>
    );


    expect(screen.getByText(`${Offers.length} places to stay in ${DEFAULT_CITY}`)).toBeInTheDocument();
  });
});
