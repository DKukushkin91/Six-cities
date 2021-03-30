import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import LoadingScreen from './loading-screen';
import * as redux from 'react-redux';

const mockStore = configureStore({});

it(`LoadingScreen should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({});

  render(
      <redux.Provider store={store}>
        <Router history = {history}>
          <LoadingScreen/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
