import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import {Comments, Offers} from '../../mocks/mocks';
import {getReviews} from '../../util';
import {
  CURRENT_SORTING,
  DEFAULT_CITY,
  DEFAULT_LOCATION,
  AuthorizationStatus,
  Paths
} from '../../constants';

const state = {
  DATA: {
    currentCity: DEFAULT_CITY,
    currentLocation: DEFAULT_LOCATION,
    currentOption: CURRENT_SORTING,
    offers: [],
    currentOffers: [],
    nearbyOffers: [],
    favorites: [],
    offerDetails: null,
    isDataLoaded: false,
    isLoaded: false,
    isFavoritesLoad: false,
    comments: []
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userValue: ``
  },
  PROCESS: {
    activeCardId: null
  }
};

const mockDispatch = jest.fn();
let history;
jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

const mockStore = configureStore({});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it(`Render 'MainPage' when user navigate to '/' url`, () => {
    const mockState = {
      ...state,
      DATA: {
        currentOffers: Offers,
        currentLocation: DEFAULT_LOCATION,
        currentCity: DEFAULT_CITY,
        isDataLoaded: true
      }
    };

    const {currentOffers, currentCity} = mockState.DATA;

    render(
        <redux.Provider store={mockStore(mockState)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Cities`)).toBeInTheDocument();
    expect(screen.getByText(`Places`)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${currentOffers.length} places to stay in ${currentCity}`), `i`)).toBeInTheDocument();
  });

  it(`Render 'FavoriteScreen' when user navigate to '/favorite' url`, () => {
    const mockState = {
      ...state,
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userValue: `test@test.ru`,
      },
      DATA: {
        isFavoritesLoad: true,
        favorites: [],
      }
    };

    history.push(Paths.FAVORITES);

    render(
        <redux.Provider store={mockStore(mockState)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Favorites (empty)`)).toBeInTheDocument();
    expect(screen.getByText(`Nothing yet saved.`)).toBeInTheDocument();
  });

  it(`Render 'LoginScreen' when user navigate to '/login' url`, () => {

    history.push(Paths.LOGIN);

    render(
        <redux.Provider store={mockStore(state)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByPlaceholderText(`Email`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Password`)).toBeInTheDocument();
    expect(screen.getByText(`Sign in`, {selector: `button.login__submit`})).toBeInTheDocument();
  });

  it(`Render 'DetailOfferScreen' when user navigate to '/offer/:id' url`, () => {
    window.scrollTo = jest.fn();
    const mockState = {
      ...state,
      DATA: {
        isLoaded: true,
        offerDetails: Offers[0],
        nearbyOffers: Offers.slice(0, 3),
        comments: Comments,
        currentLocation: DEFAULT_LOCATION
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userValue: `test@test.ru`,
      }
    };

    const {comments} = mockState.DATA;
    const reviews = getReviews(comments);

    history.push(Paths.OFFER);

    render(
        <redux.Provider store={mockStore(mockState)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`What's inside`)).toBeInTheDocument();
    expect(screen.getByText(`Reviews ·`, `${reviews.length}`)).toBeInTheDocument();
    expect(screen.getByText(`Meet the host`)).toBeInTheDocument();
  });

  it(`Render 'NotFoundScreen' when user navigate to non-existent route`, () => {
    history.push(Paths.NOT_FOUND);

    render(
        <redux.Provider store={mockStore(state)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Go Home`)).toBeInTheDocument();
  });
});
