import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FavoritesList from './favorites-list';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, Path} from '../../constants';
import {inFavoriteList} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`FavoritesList should render correctly`, () => {
  const history = createMemoryHistory();
  let store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });

  history.push(Path.FAVORITES);

  render(
      <redux.Provider store = {store}>
        <Router history = {history}>
          <FavoritesList favorites = {inFavoriteList}/>
        </Router>
      </redux.Provider>
  );
  expect(screen.getByTestId(`favorites__list-test`)).toBeInTheDocument();
});
