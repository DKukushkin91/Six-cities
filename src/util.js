import {MAX_NEAR_OFFERS, Rating, Sorting} from './constants';

export const getRandomItem = (items) => items[Math.round(Math.floor(Math.random() * items.length))];

export const getRandomNumbers = (min, max) => Math.round(Math.random() * (max - min) + min);

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getBoolean = () => Boolean(getRandomInteger(0, 1));

export const getSorting = (offers, city, option) => {
  const defaultState = offers.filter((item) => item.city.name === city);
  switch (option) {
    case Sorting.LOW_PRICE:
      return defaultState.sort((a, b) => a.price - b.price);
    case Sorting.HIGH_PRICE:
      return defaultState.sort((a, b) => b.price - a.price);
    case Sorting.TOP_RATE:
      return defaultState.sort((a, b) => b.rating - a.rating);
    default:
      return defaultState;
  }
};

export const getCityLocation = (offers, city) => {
  return offers.find((item) => item.city.name === city).city.location;
};

export const getNearestOffers = (nearby) => {
  return nearby.filter((item) => item.id !== nearby.id
  )
    .slice(0, MAX_NEAR_OFFERS);
};

export const getRatingPercent = (rating) => Number(rating / Rating.MAX) * Rating.PERCENT;

export const getUpperCase = (str) => {
  if (!str) {
    return str;
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};
