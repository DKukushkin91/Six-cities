import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Favorite from './favorite';
import {AuthorizationStatus, Paths} from '../../constants';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`Favorite should render correctly`, () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });
  const history = createMemoryHistory();

  history.push(Paths.FAVORITES);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Favorite offers={Offers[0]}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/night/i)).toBeInTheDocument();
  expect(screen.getByText(/€/i)).toBeInTheDocument();
});
