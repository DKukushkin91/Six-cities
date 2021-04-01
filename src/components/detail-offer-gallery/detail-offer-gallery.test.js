import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {Path} from '../../constants';
import DetailOfferGallery from './detail-offer-gallery';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});

it(`DetailOfferGallery should render correctly`, () => {
  const store = mockStore({});
  const {images} = Offers[0];
  const history = createMemoryHistory();

  history.push(Path.OFFER);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <DetailOfferGallery images={images}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getAllByAltText(`Photo studio`));
});
