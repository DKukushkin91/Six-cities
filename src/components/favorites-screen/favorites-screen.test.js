import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import FavoritesScreen from './favorites-screen';
import {AuthorizationStatus, Path} from '../../constants';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe(`Test FavoritesScreen`, () => {
  it(`FavoritesScreen should render correctly`, () => {
    const store = mockStore({
      DATA: {
        favorites: Offers.map((item) => ({...item, isFavorite: true})),
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH
      }
    });

    history.push(Path.FAVORITES);

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoritesScreen/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(container.getElementsByClassName(`page__main--favorites`).length).toEqual(1);
    expect(container.getElementsByClassName(`favorites__locations-items`).length).toEqual(2);
  });

  it(`FavoritesScreen empty render`, () => {
    const store = mockStore({
      DATA: {
        favorites: [],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH
      }
    });

    history.push(Path.FAVORITES);

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoritesScreen/>
          </Router>
        </redux.Provider>
    );

    expect(container.getElementsByClassName(`favorites favorites--empty`).length).toEqual(1);
    expect(screen.getByText(`Save properties to narrow down search or plan your future trips.`)).toBeInTheDocument();
  });
});
