import {Rating, Sorting} from './constants';

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

export const getRatingPercent = (rating) => Number(rating / Rating.MAX) * Rating.PERCENT;

export const getUpperCase = (str) => !str ? str : `${str[0].toUpperCase()}${str.slice(1)}`;
