import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comments';
import {SORTING_LIST, CITIES_LIST} from './constants';
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
        cities={CITIES_LIST}
        options={SORTING_LIST}
      />
    </Provider>,
    document.querySelector(`#root`)
);
