import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import ReviewForm from './review-form';
import userEvent from '@testing-library/user-event';
import {Comments} from "../../mocks/mocks";

const mockStore = configureStore({});
const mockReviews = [...Comments];
const mockDispatch = jest.fn();

let offerId;
let formData;
let store;

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

jest.mock(`../../store/api-actions`, () => ({
  ...jest.requireActual(`../../store/api-actions`),
  commentsPost: (id, data) => {
    offerId = id;
    formData = data;
  },
}));


describe(`Test ReviewForm`, () => {
  beforeEach(() => {
    store = mockStore({
      DATA: {error: null}
    });
  });

  it(`Should correctly render empty form`, () => {
    const {container} = render(
        <redux.Provider store={store}>
          <ReviewForm offerId={1} comments={mockReviews}/>
        </redux.Provider>
    );

    expect(screen.getByText(`Your review`)).toBeInTheDocument();
    expect(container.getElementsByClassName(`form__rating-input visually-hidden`).length).toBe(5);
    expect(container.getElementsByClassName(`reviews__textarea form__textarea`).length).toBe(1);
    expect(screen.getByRole(`button`)).toBeInTheDocument();
    expect(screen.getByRole(`button`)).toBeDisabled();
  });

  it(`Should change rating`, () => {
    render(
        <redux.Provider store={store}>
          <ReviewForm offerId={1} comments={mockReviews}/>
        </redux.Provider>
    );

    expect(screen.getByRole(`button`)).toBeDisabled();
    userEvent.click(screen.getByTestId(`4-stars`));
    expect(screen.getByTestId(`4-stars`)).toBeChecked();
  });

  it(`Should submit form`, () => {
    render(
        <redux.Provider store={store}>
          <ReviewForm offerId={1} comments={mockReviews}/>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`4-stars`));
    userEvent.type(screen.getByTestId(`review`), `Very beautiful view from the window`);

    const submitButton = screen.getByRole(`button`);
    submitButton.disabled = false;

    userEvent.click(submitButton);

    const expectedData = {
      rating: `4`,
      comment: `Very beautiful view from the window`,
    };

    expect(mockDispatch).toBeCalled();
    expect(offerId).toBe(1);
    expect(formData).toMatchObject(expectedData);
  });
});
