import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comments';
import {city, points} from './mocks/map';

ReactDOM.render(
    <App
      offersCount={offers.length}
      offers={offers}
      comments={comments}
      city={city}
      points={points}
    />,
    document.querySelector(`#root`)
);
