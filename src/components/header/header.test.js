import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Header from "./header";
import {AuthorizationStatus} from "../../constants";

const mockStore = configureStore({});
const history = createMemoryHistory();
let store;

describe(`Test Header`, () => {
  beforeEach(() => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH
      }
    });
  });

  it(`Header should correctly render on not authorization user`, () => {
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it(`Header should correctly render on authorization user`, () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userValue: `test@test.ru`
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    expect(screen.getByText(`test@test.ru`)).toBeInTheDocument();
  });
});
