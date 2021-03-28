import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {Paths} from '../../constants';
import DetailFeatures from './detail-features';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`Render DetailFeatures`, () => {
  const store = mockStore({});
  const detailOffer = Offers[0];
  const history = createMemoryHistory();
  history.push(Paths.OFFER);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <DetailFeatures offers={detailOffer}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
  expect(screen.getByText(/adults/i)).toBeInTheDocument();
});
