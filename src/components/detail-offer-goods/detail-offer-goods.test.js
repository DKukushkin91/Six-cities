import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import DetailOfferGoods from './detail-offer-goods';
import {Paths} from '../../constants';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`Render DetailOfferGoods`, () => {
  const store = mockStore({});
  const {goods} = Offers[0];
  const history = createMemoryHistory();

  history.push(Paths.OFFER);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <DetailOfferGoods goods={goods}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
});
