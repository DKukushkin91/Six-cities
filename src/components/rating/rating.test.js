import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Rating from "./rating";
import {Offers} from "../../mocks/mocks";

const mockStore = configureStore({});
const history = createMemoryHistory();

it(`Rating should render correctly`, () => {
  const store = mockStore({});
  const {rating} = Offers[0];

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Rating rating={rating}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Rating`)).toBeInTheDocument();
});
