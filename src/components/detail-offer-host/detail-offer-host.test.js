import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import DetailOfferHost from './detail-offer-host';
import {Path} from '../../constants';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`DetailOfferHost should render correctly`, () => {
  const store = mockStore({});
  const {description, host} = Offers[0];
  const history = createMemoryHistory();

  history.push(Path.OFFER);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <DetailOfferHost description={description} host={host}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
});
