import {ActionType} from './action';
import {getCityLocation, getSorting} from '../util';
import {DEFAULT_CITY, DEFAULT_LOCATION, CURRENT_SORTING, AuthorizationStatus} from '../constants';

const initialState = {
  currentCity: DEFAULT_CITY,
  currentLocation: DEFAULT_LOCATION,
  offers: [],
  currentOffers: [],
  nearbyOffers: [],
  comments: [],
  offerDetails: null,
  currentOption: CURRENT_SORTING,
  activeCardId: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  userValue: ``,
  onOfferOpen: false,
  onSendComments: false,
  isLoaded: false,
  id: null,
  favorite: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOffers: getSorting(state.offers, action.payload),
        currentLocation: getCityLocation(state.offers, action.payload),
        currentOption: CURRENT_SORTING
      };
    case ActionType.CHANGE_OPTION:
      return {
        ...state,
        currentOption: action.payload,
        currentOffers: getSorting(state.offers, state.currentCity, action.payload)
      };
    case ActionType.HOVER_OFFER:
      return {
        ...state,
        activeCardId: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        currentOffers: getSorting(action.payload, state.currentCity, state.currentOption),
        currentLocation: getCityLocation(action.payload, state.currentCity),
        isDataLoaded: true,
      };
    case ActionType.LOAD_DETAILS:
      return {
        ...state,
        offerDetails: action.payload,
        isLoaded: true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.USER_VALUE:
      return {
        ...state,
        userValue: action.payload,
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    case ActionType.ADDED_COMMENT:
      return {
        ...state,
        comments: action.payload,
        onSendComments: true,
      };
    case ActionType.CHANGE_STATUS:
      return {
        ...state,
        favorite: action.payload,
      };
  }
  return state;
};

export {reducer};
