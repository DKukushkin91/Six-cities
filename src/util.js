import {Condition, Rating, Sorting, MAX_REVIEWS_LENGTH} from './constants';

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

export const getReviews = (comments) => {
  return [...comments].sort(getSortReviews).slice(0, MAX_REVIEWS_LENGTH);
};

export const getSortReviews = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};

export const changeFavoriteOffer = (offers, changedOffer) => {
  const index = offers.findIndex((item) => item.id === changedOffer.id);

  return [
    ...offers.slice(0, index),
    changedOffer,
    ...offers.slice(index + 1),
  ];
};

export const changeFavorites = (favorites, changedOffer) => {
  const index = favorites.findIndex((item) => item.id === changedOffer.id);

  if (index === -1) {
    return [...favorites, changedOffer];
  }

  return [
    ...favorites.slice(0, index),
    ...favorites.slice(index + 1),
  ];
};

export const changeNearbyOffers = (nearbyOffers, changedOffer) => {
  const index = nearbyOffers.findIndex((item) => item.id === changedOffer.id);

  if (index !== -1) {
    return [
      ...nearbyOffers.slice(0, index),
      changedOffer,
      ...nearbyOffers.slice(index + 1),
    ];
  }

  return nearbyOffers;
};

export const changeCurrentOffer = (currentOffer, changedOffer) => {
  return currentOffer !== null && currentOffer.id === changedOffer.id
    ? changedOffer
    : currentOffer;
};

export const isSubmitDisabled = (reviewData, fieldDisabled) => {
  const {rating, review} = reviewData;

  return !(
    rating >= Condition.MIN_RATING &&
    review.length > Condition.MIN_DESCRIPTION &&
    review.length < Condition.MAX_DESCRIPTION &&
    !fieldDisabled
  );
};
