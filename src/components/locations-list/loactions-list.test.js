import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import LocationsList from './locations-list';
import * as redux from 'react-redux';
import {CITIES_LIST, DEFAULT_CITY} from '../../constants';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});
const history = createMemoryHistory();
const mockDispatch = jest.fn();
let selectedCity;

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.mock(`../../store/action`, () => ({
  ...jest.requireActual(`../../store/action`),
  changeCity: (city) => {
    selectedCity = city;
  },
}));

describe(`LocationsList test`, () => {
  it(`LocationsList should render correctly`, () => {
    const store = mockStore({});
    const cities = CITIES_LIST;
    const currentCity = DEFAULT_CITY;

    const {container} = render(
        <redux.Provider store = {store}>
          <Router history = {history}>
            <LocationsList cities = {cities} currentCity = {currentCity}/>
          </Router>
        </redux.Provider>
    );

    expect(container.getElementsByClassName(`locations__item`).length).toBe(6);
    expect(screen.getByText(`Amsterdam`)).toBeInTheDocument();
  });

  it(`Should call dispatch with chosen city`, () => {
    const store = mockStore({});
    const citiesList = CITIES_LIST;
    const currentCity = DEFAULT_CITY;

    render(
        <redux.Provider store = {store}>
          <Router history = {history}>
            <LocationsList cities = {citiesList} currentCity = {currentCity}/>
          </Router>
        </redux.Provider>
    );

    const cities = screen.getAllByRole(`link`);

    for (const link of cities) {
      if (link.className === `locations__item-link tabs__item tabs__item--active`) {
        continue;
      }

      userEvent.click(link);
      expect(mockDispatch).toBeCalled();
      expect(selectedCity).toBe(link.textContent);
    }
  });
});
