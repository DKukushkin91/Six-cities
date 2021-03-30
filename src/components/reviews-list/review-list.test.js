import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import ReviewList from "./review-list";
import {Comments} from "../../mocks/mocks";

const mockStore = configureStore({});
const history = createMemoryHistory();

it(`ReviewList should render correctly`, () => {
  const store = mockStore({});
  const comments = [...Comments];

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ReviewList comments={comments}/>
        </Router>
      </redux.Provider>
  );

  expect(container.getElementsByClassName(`reviews__user-name`).length).toBe(5);
  expect(container.getElementsByClassName(`rating`).length).toBe(5);
  expect(container.getElementsByClassName(`reviews__text`).length).toBe(5);
  expect(container.getElementsByClassName(`reviews__time`).length).toBe(5);
});
