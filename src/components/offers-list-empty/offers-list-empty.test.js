import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import OffersListEmpty from "./offers-list-empty";
import {DEFAULT_CITY} from "../../constants";

const mockStore = configureStore({});
const history = createMemoryHistory();

it(`OffersListEmpty should render correctly`, () => {
  const store = mockStore({});
  const currentCity = DEFAULT_CITY;

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <OffersListEmpty currentCity={currentCity}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`We could not find any property available at the moment in ${currentCity}`),
      `i`)).toBeInTheDocument();
});
