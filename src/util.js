import {MAX_NEAR_OFFERS} from './constants';

export const getRandomItem = (items) => items[Math.round(Math.floor(Math.random() * items.length))];

export const getRandomNumbers = (min, max) => Math.round(Math.random() * (max - min) + min);

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getBoolean = () => Boolean(getRandomInteger(0, 1));

export const getFilterArray = (offers, city) => {
  return offers.filter((item) => item.city.name === city);
};

export const getCityLocation = (offers, city) => {
  return offers.find((item) => item.city.name === city).city.location;
};

export const getNearestOffers = (offers, offer) => {
  return offers.filter((item) =>
    item.city.name === offer.city.name && item.id !== offer.id
  )
    .slice(0, MAX_NEAR_OFFERS);
};
