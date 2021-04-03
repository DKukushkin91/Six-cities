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
  LOAD_DETAILS: `data/loadDetails`,
  CHANGE_STATUS: `offer/changeStatus`,
  LOAD_FAVORITES: `data/loadFavorites`,
  SET_ERROR: `data/setError`,
  REMOVE_DETAIL_OFFER: `data/removeDetailOffer`
};

export const changeCity = createAction(ActionType.CHANGE_CURRENT_CITY, (payload) => ({payload}));

export const changeOption = createAction(ActionType.CHANGE_OPTION, (payload) => ({payload}));

export const changeActiveOffer = createAction(ActionType.CHANGE_ACTIVE_OFFER, (payload) => ({payload}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (payload) => ({payload}));

export const loadDetailOffer = createAction(ActionType.LOAD_DETAILS, (payload) => ({payload}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (payload) => ({payload}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (payload) => ({payload}));

export const changeValue = createAction(ActionType.USER_VALUE, (payload) => ({payload}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (payload) => ({payload}));

export const loadNearby = createAction(ActionType.LOAD_NEARBY, (payload) => ({payload}));

export const addedComment = createAction(ActionType.ADDED_COMMENT, (payload) => ({payload}));

export const changeStatus = createAction(ActionType.CHANGE_STATUS, (payload) => ({payload}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (payload) => ({payload}));

export const setError = createAction(ActionType.SET_ERROR, (payload) => ({payload}));

export const removeDetailOffer = createAction(ActionType.REMOVE_DETAIL_OFFER, (payload) => ({payload}));
