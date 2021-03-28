import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import DetailNearOffer from './detail-near-offer';
import {Offers} from '../../mocks/mocks';
import {AuthorizationStatus, Paths} from '../../constants';

const mockStore = configureStore({});
const mockDispatch = jest.fn();
window.scrollTo = jest.fn();

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

it(`Change active offer`, () => {
  const store = mockStore({
    PROCESS: {activeId: 2},
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });

  const history = createMemoryHistory();
  history.push(Paths.OFFER);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <DetailNearOffer offer={Offers[0]}/>
        </Router>
      </redux.Provider>
  );

  userEvent.click(screen.getByTestId(`nearby-offer`));

  const expectedData = {
    id: 2
  };

  const testValue = {
    id: 2
  };

  expect(mockDispatch).toBeCalled();
  expect(testValue).toMatchObject(expectedData);
});

