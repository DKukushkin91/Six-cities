import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import OfferSorting from './offer-sorting';
import {CURRENT_SORTING, SORTING_LIST} from '../../constants';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});
const history = createMemoryHistory();
const mockDispatch = jest.fn();

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

describe(`Test Offers Sorting`, () => {
  it(`OfferSorting should render correctly`, () => {
    const store = mockStore({
      DATA: {
        currentOption: CURRENT_SORTING
      }
    });
    const options = SORTING_LIST;

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <OfferSorting options={options}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Sort by`)).toBeInTheDocument();
    expect(container.getElementsByClassName(`places__option`).length).toBe(4);
  });

  it(`Should open/close the list on user click`, () => {
    const store = mockStore({
      DATA: {
        currentOption: CURRENT_SORTING
      }
    });
    const options = SORTING_LIST;

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <OfferSorting options={options}/>
          </Router>
        </redux.Provider>
    );

    expect(container.getElementsByClassName(`places__options places__options--custom places__options--opened`)
        .length).toBe(0);
    userEvent.click(screen.getByTestId(`open-options`));
    expect(container.getElementsByClassName(`places__options places__options--custom places__options--opened`)
      .length).toBe(1);

    userEvent.unhover(screen.getByTestId(`options-list`));
    expect(container.getElementsByClassName(`places__options places__options--custom places__options--opened`)
      .length).toBe(0);
  });

  it(`Should call dispatch`, () => {
    const store = mockStore({
      DATA: {
        currentOption: `Price: high to low`
      }
    });
    const options = SORTING_LIST;

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <OfferSorting options={options}/>
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`open-options`));
    expect(container.getElementsByClassName(`places__options places__options--custom places__options--opened`)
        .length).toBe(1);
    userEvent.click(screen.getByTestId(`options-item-Price: low to high`));
    expect(mockDispatch).toBeCalledTimes(1);
    expect(container.getElementsByClassName(`places__option places__option--active`).length).toBe(1);
  });
});
