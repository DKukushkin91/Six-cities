import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import DetailOfferHost from './detail-offer-host';
import {Paths} from '../../constants';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`DetailOfferHost should render correctly`, () => {
  const store = mockStore({});
  const offer = Offers[0];
  const history = createMemoryHistory();

  history.push(Paths.OFFER);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <DetailOfferHost offer={offer}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
});
