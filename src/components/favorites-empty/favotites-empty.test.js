import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FavoritesEmpty from './favorites-empty';

it(`FavoritesEmpty should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history = {history}>
        <FavoritesEmpty/>
      </Router>
  );

  const headerElement = getByText(`Favorites (empty)`);
  const boldElement = getByText(`Nothing yet saved.`);
  const paragraphElement = getByText(`Save properties to narrow down search or plan your future trips.`);

  expect(headerElement).toBeInTheDocument();
  expect(boldElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
