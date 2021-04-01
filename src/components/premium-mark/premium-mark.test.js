import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import PremiumMark from "./premium-mark";
import {Offers} from "../../mocks/mocks";
import {ComponentName} from "../../constants";

const mockStore = configureStore({});
const history = createMemoryHistory();

it(`PremiumMark should render correctly`, () => {
  const store = mockStore({});
  const {isPremium} = Offers[0];
  const componentName = ComponentName.PROPERTY;

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <PremiumMark componentName={componentName} isPremium={isPremium}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Premium`)).toBeInTheDocument();
});
