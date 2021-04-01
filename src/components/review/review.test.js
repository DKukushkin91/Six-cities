import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Review from "./review";
import {Comments} from "../../mocks/mocks";

const mockStore = configureStore({});
const history = createMemoryHistory();

it(`Review should render correctly`, () => {
  const store = mockStore({});
  const comments = Comments[0];

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Review comments={comments}/>
        </Router>
      </redux.Provider>
  );

  expect(screen
    .getByText(/A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam./i))
    .toBeInTheDocument();
  expect(screen.getByText(/May 2019/i)).toBeInTheDocument();
  expect(screen.getByText(/Max/i)).toBeInTheDocument();
});
