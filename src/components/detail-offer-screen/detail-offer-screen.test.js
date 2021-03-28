import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import DetailOfferScreen from './detail-offer-screen';
import {Offers} from '../../mocks/mocks';

const mockStore = configureStore({});
const store = mockStore({
  DATA: {
    offerDetails: Offers[0],
  }
});

const match = {
  params: {
    id: `1`
  }
};

const history = createMemoryHistory();
const mockDispatch = jest.fn();

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: () => mockDispatch,
}));

describe(`Test DetailOfferScreen`, () => {
  it(`Should call useDispatch 3 times`, () => {
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <DetailOfferScreen.WrappedComponent match={match}/>
          </Router>
        </redux.Provider>
    );

    expect(mockDispatch).toBeCalledTimes(3);
  });

  //   it(`Render DetailOfferScreen`, () => {
  //     const route = `/offer/1`;

  //     history.push(route);

//     render(
//         <redux.Provider store={store}>
//           <Router history={history}>
//             <DetailOfferScreen.WrappedComponent match={match}/>
//           </Router>
//         </redux.Provider>
//     );
//     expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
//     expect(screen.getByText(/adults/i)).toBeInTheDocument();
//   });
});
