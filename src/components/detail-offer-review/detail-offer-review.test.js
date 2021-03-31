import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import DetailOfferReview from './detail-offer-review';
import {AuthorizationStatus, Paths} from '../../constants';
import {Comments, Offers} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`DetailOfferReview should render correctly`, () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH},
    DATA: {error: null}
  });
  const {id} = Offers[0];
  const comments = Comments;
  const history = createMemoryHistory();

  history.push(Paths.OFFER);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <DetailOfferReview offerId={id} comments={comments}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Reviews ·`, `${comments.length}`)).toBeInTheDocument();
});
