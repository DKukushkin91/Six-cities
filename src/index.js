import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  CARDS_COUNT: 5
};

ReactDOM.render(
    <App cardsCount={Settings.CARDS_COUNT}/>,
    document.querySelector(`#root`)
);
