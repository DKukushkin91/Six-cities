import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginScreen from './login-screen';
import {AuthorizationStatus, DEFAULT_CITY, Paths} from '../../constants';

const mockStore = configureStore({});
const mockDispatch = jest.fn();
let formData;
let history;

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.mock(`../../store/api-actions`, () => ({
  ...jest.requireActual(`../../store/api-actions`),
  login: (data) => {
    formData = data;
  },
}));

describe(`Test LoginScreen`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it(`Render 'LoginScreen' when user navigate to '/login' url`, () => {
    const store = mockStore({
      DATA: {currentCity: DEFAULT_CITY},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}
    });
    history.push(Paths.LOGIN);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <LoginScreen/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Sign in`, {selector: `button.login__submit`})).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it(`LoginScreen send correct data`, () => {
    history.push(Paths.LOGIN);
    const store = mockStore({
      DATA: {currentCity: DEFAULT_CITY},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <LoginScreen/>
          </Router>
        </redux.Provider>
    );

    userEvent.type(screen.getByTestId(`email`), `test@test.ru`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId(`submit-button`));

    const expectedData = {
      email: `test@test.ru`,
      password: `123456`,
    };

    expect(mockDispatch).toBeCalled();
    expect(formData).toMatchObject(expectedData);
  });
});
