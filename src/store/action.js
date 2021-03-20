import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CURRENT_CITY: `city/currentCity`,
  CHANGE_OPTION: `option/changeOption`,
  CHANGE_ACTIVE_OFFER: `offer/changeActiveOffer`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_OFFERS: `data/loadOffers`,
  USER_VALUE: `user/userValue`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  LOAD_NEARBY: `data/loadNearby`,
  LOAD_COMMENTS: `data/loadComments`,
  ADDED_COMMENT: `offerDetails/addedComment`,
  OPEN_PROPERTY: `offerDetails/openProperty`,
  LOAD_DETAILS: `data/loadDetails`,
  CHANGE_STATUS: `offer/changeStatus`,
  LOAD_FAVORITES: `data/loadFavorites`
};

export const changeCity = createAction(ActionType.CHANGE_CURRENT_CITY, (city) => {
  return {
    payload: city
  };
});

export const changeOption = createAction(ActionType.CHANGE_OPTION, (options) => {
  return {
    payload: options
  };
});

export const changeActiveOffer = createAction(ActionType.CHANGE_ACTIVE_OFFER, (id) => {
  return {
    payload: id
  };
});

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const loadDetailOffer = createAction(ActionType.LOAD_DETAILS, (offer) => {
  return {
    payload: offer
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments
  };
});

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status
  };
});

export const changeValue = createAction(ActionType.USER_VALUE, (value) => {
  return {
    payload: value
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});

export const loadNearby = createAction(ActionType.LOAD_NEARBY, (nearby) => {
  return {
    payload: nearby
  };
});

export const addedComment = createAction(ActionType.ADDED_COMMENT, (comment) => {
  return {
    payload: comment
  };
});

export const changeStatus = createAction(ActionType.CHANGE_STATUS, (favorite) => {
  return {
    payload: favorite
  };
});

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (favorites) => {
  return {
    payload: favorites
  };
});


