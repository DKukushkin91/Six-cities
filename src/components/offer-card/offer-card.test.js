import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import OfferCard from './offer-card';
import userEvent from '@testing-library/user-event';
import {Offers} from '../../mocks/mocks';
import {AuthorizationStatus} from '../../constants';

const mockStore = configureStore({});
const history = createMemoryHistory();
const mockDispatch = jest.fn();
let activeOffer;

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.mock(`../../store/action`, () => ({
  ...jest.requireActual(`../../store/action`),
  changeActiveOffer: (data) => {
    activeOffer = data;
  },
}));

it(`Should set an active offer`, () => {
  const store = mockStore({
    PROCESS: {
      activeCardId: null
    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });
  const offer = Offers[0];

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <OfferCard offer={offer}/>
        </Router>
      </redux.Provider>
  );

  const article = screen.getByRole(`article`);

  userEvent.hover(article);
  expect(mockDispatch).toBeCalled();
  expect(activeOffer).toStrictEqual(offer.id);
});
