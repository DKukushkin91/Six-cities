import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import DetailOffer from './detail-offer';
import {Comments, Offers} from '../../mocks/mocks';
import {AuthorizationStatus, DEFAULT_LOCATION, Path} from '../../constants';

const mockStore = configureStore({});
window.scrollTo = jest.fn();

it(`DetailOffer should render correctly`, () => {
  const offerDetails = Offers[0];
  const store = mockStore({
    DATA: {
      comments: Comments,
      nearbyOffers: [],
      currentLocation: DEFAULT_LOCATION
    },
    PROCESS: {activeCardId: offerDetails.id},
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });
  const history = createMemoryHistory();
  history.push(Path.OFFER);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <DetailOffer offerDetails={offerDetails}/>
        </Router>
      </redux.Provider>
  );
  expect(screen.getByText(/night/i)).toBeInTheDocument();
});
