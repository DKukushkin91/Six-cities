import {ActionType} from './action';
import {getCityLocation, getSorting} from '../util';
import {DEFAULT_CITY, DEFAULT_LOCATION, CURRENT_SORTING} from '../constants';
import offers from '../mocks/offers';

const initialState = {
  currentCity: DEFAULT_CITY,
  currentLocation: DEFAULT_LOCATION,
  offers,
  currentOffers: getSorting(offers, DEFAULT_CITY),
  currentOption: CURRENT_SORTING,
  activeCardId: null
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
  }
  return state;
};

export {reducer};
