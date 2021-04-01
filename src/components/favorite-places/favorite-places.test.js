import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import FavoritePlaces from './favorite-places';
import {AuthorizationStatus, Path} from '../../constants';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`FavoritePlaces should render correctly`, () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });
  const history = createMemoryHistory();

  history.push(Path.FAVORITES);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <FavoritePlaces favorites={Offers}/>
        </Router>
      </redux.Provider>
  );
});
