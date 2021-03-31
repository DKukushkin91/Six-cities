import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import FavoriteButton from './favorite-button';
import {AuthorizationStatus, FavoriteButtonSize} from '../../constants';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});
const history = createMemoryHistory();
const mockDispatch = jest.fn();

let offerId = null;
let status = null;
let loginPath = ``;

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.mock(`../../store/api-actions`, () => ({
  ...jest.requireActual(`../../store/api-actions`),
  favoriteStatus: ({id, favorite}) => {
    offerId = id;
    status = favorite;
  },
}));

jest.mock(`../../store/action`, () => ({
  ...jest.requireActual(`../../store/action`),
  redirectToRoute: (data) => {
    loginPath = data;
  },
}));

describe(`Test FavoriteButton`, () => {
  it(`Should be correctly render FavoriteButton if offer not isFavorite`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoriteButton
              isFavorite={false}
              id={1}
              componentName={`place-card`}
              buttonSize={FavoriteButtonSize.Property}
            />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`To bookmarks`)).toBeInTheDocument();
    expect(container.getElementsByClassName(`place-card__bookmark-button button`)
      .length).toBe(1);
    expect(screen.getByRole(`button`)).toBeInTheDocument();
  });

  it(`Should be correctly render FavoriteButton if offer isFavorite`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoriteButton
              isFavorite={true}
              id={1}
              componentName={`place-card`}
              buttonSize={FavoriteButtonSize.Property}
            />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`In bookmarks`)).toBeInTheDocument();
    expect(container.getElementsByClassName(`place-card__bookmark-button place-card__bookmark-button--active button`)
    .length).toBe(1);
    expect(screen.getByRole(`button`)).toBeInTheDocument();
  });

  it(`Favorite button click, not auth user`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoriteButton
              isFavorite={false}
              id={1}
              componentName={`place-card`}
              buttonSize={FavoriteButtonSize.Property}
            />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`favorite-button`));

    expect(mockDispatch).toBeCalledTimes(1);
    expect(offerId).toBe(null);
    expect(status).toBe(null);
    expect(loginPath).toBe(`/login`);
  });

  it(`Favorite button click, auth user`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoriteButton
              isFavorite={true}
              id={1}
              componentName={`place-card`}
              buttonSize={FavoriteButtonSize.Property}
            />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`favorite-button`));

    expect(mockDispatch).toBeCalledTimes(2);
    expect(offerId).toBe(1);
    expect(status).toBe(0);
  });
});
