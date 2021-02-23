import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comments';
import cities from './mocks/cities';
// import {city, points} from './mocks/map';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        comments={comments}
        // city={city}
        // points={points}
        cities={cities}
      />
    </Provider>,
    document.querySelector(`#root`)
);
