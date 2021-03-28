// import React from 'react';
// import {render, screen} from '@testing-library/react';
// import {Router} from 'react-router-dom';
// import {createMemoryHistory} from 'history';
// import configureStore from 'redux-mock-store';
// import * as redux from 'react-redux';
// import DetailOffer from './detail-offer';
// import {Comments, Offers} from '../../mocks/mocks';
// import { Paths } from '../../constants';

// const mockStore = configureStore({});
// window.scrollTo = jest.fn();

// it(`Render DetailOffer`, () => {
//   const nearbyOffers = Offers;
//   const offerDetails = Offers[0];
//   const store = mockStore({
//     DATA: [
//       {
//         comments: Comments
//       },
//       {
//         nearbyOffers
//       },
//     ],
//     detailsNearbyOffers: [...nearbyOffers, offerDetails]
//   });
//   const history = createMemoryHistory();
//   history.push(Paths.OFFER);

//   render(
//       <redux.Provider store={store}>
//         <Router history={history}>
//           <DetailOffer offerDetails={offerDetails}/>
//         </Router>
//       </redux.Provider>
//   );

//   expect(screen.getByText(/night/i)).toBeInTheDocument();
// });
