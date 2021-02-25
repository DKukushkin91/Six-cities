import {ActionType} from './action';
import {getCityLocation, getFilterArray} from '../util';
import {CITIES_LIST, DEFAULT_CITY, DEFAULT_LOCATION} from '../constants';
import offers from '../mocks/offers';

const initialState = {
  currentCity: DEFAULT_CITY,
  currentLocation: DEFAULT_LOCATION,
  offers,
  currentOffers: getFilterArray(offers, DEFAULT_CITY),
  cities: CITIES_LIST
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentOffers: getFilterArray(state.offers, action.payload),
        currentLocation: getCityLocation(state.offers, action.payload),
      };
  }
  return state;
};

export {reducer};
