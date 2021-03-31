import {offerData} from './offer-data';
import {ActionType} from '../action';
import {
  Offers,
  inFavoriteList,
  Comments
} from '../../mocks/mocks';
import {
  DEFAULT_CITY,
  DEFAULT_LOCATION,
  CURRENT_SORTING,
} from '../../constants';
import {
  getCityLocation,
  getSorting,
  changeFavoriteOffer,
  changeCurrentOffer,
  changeNearbyOffers,
  changeFavorites
} from '../../util';

const mockState = {
  currentCity: DEFAULT_CITY,
  currentLocation: DEFAULT_LOCATION,
  currentOption: CURRENT_SORTING,
  offers: [],
  currentOffers: [],
  nearbyOffers: [],
  comments: [],
  favorites: [],
  offerDetails: null,
  isDataLoaded: false,
  isLoaded: false,
  isFavoritesLoad: false,
  error: null
};

describe(`Reducer 'offerData' should work correctly`, () => {

  it(`Reducer should update city by change city`, () => {
    const mockCity = `Amsterdam`;
    const state = {
      ...mockState,
      offers: Offers,
      currentOption: `Top rated first`
    };

    const changeCurrentCity = {
      type: ActionType.CHANGE_CURRENT_CITY,
      payload: mockCity
    };

    expect(offerData(state, changeCurrentCity))
      .toEqual({
        ...state,
        currentCity: mockCity,
        currentOffers: getSorting(Offers, mockCity),
        currentLocation: getCityLocation(Offers, mockCity),
        currentOption: CURRENT_SORTING,
      });
  });

  it(`Reducer should update option by change options`, () => {
    const mockOption = `Price: low to hight`;
    const mockCity = `Amsterdam`;
    const state = {
      ...mockState,
      offers: Offers,
      currentCity: mockCity
    };

    const changeOption = {
      type: ActionType.CHANGE_OPTION,
      payload: mockOption
    };

    expect(offerData(state, changeOption))
      .toEqual({
        ...state,
        currentOption: mockOption,
        currentOffers: getSorting(Offers, mockCity, mockOption)
      });
  });

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offerData(undefined, {}))
      .toEqual(mockState);
  });

  it(`Reducer should update favorite status`, () => {
    const offer = Offers[1];
    const state = {
      ...mockState,
      currentOffers: Offers,
      favorites: Offers,
      nearbyOffers: Offers,
      offerDetails: offer,
    };
    const changeStatus = {
      type: ActionType.CHANGE_STATUS,
      payload: offer
    };

    expect(offerData(state, changeStatus))
      .toEqual({
        ...state,
        currentOffers: changeFavoriteOffer(Offers, offer),
        favorites: changeFavorites(Offers, offer),
        nearbyOffers: changeNearbyOffers(Offers, offer),
        offerDetails: changeCurrentOffer(offer, offer),
      });
  });

  it(`Reducer should load detail offer`, () => {
    const state = mockState;
    const loadDetails = {
      type: ActionType.LOAD_DETAILS,
      payload: Offers
    };

    expect(offerData(state, loadDetails))
      .toEqual({
        ...state,
        offerDetails: Offers,
        isLoaded: true
      });
  });

  it(`Reducer should load comments`, () => {
    const state = mockState;
    const loadComments = {
      type: ActionType.LOAD_COMMENTS,
      payload: Comments
    };

    expect(offerData(state, loadComments))
      .toEqual({
        ...state,
        comments: Comments,
      });
  });

  it(`Reducer should load nearby offers`, () => {
    const state = mockState;
    const loadNearby = {
      type: ActionType.LOAD_NEARBY,
      payload: Offers
    };

    expect(offerData(state, loadNearby))
      .toEqual({
        ...state,
        nearbyOffers: Offers,
      });
  });

  it(`Reducer should added comment`, () => {
    const state = mockState;
    const addedComment = {
      type: ActionType.ADDED_COMMENT,
      payload: Comments
    };

    expect(offerData(state, addedComment))
      .toEqual({
        ...state,
        comments: Comments,
        onSendComments: true
      });
  });

  it(`Reducer should load favorites list`, () => {
    const state = mockState;
    const loadFavoritesList = {
      type: ActionType.LOAD_FAVORITES,
      payload: inFavoriteList
    };

    expect(offerData(state, loadFavoritesList))
      .toEqual({
        ...state,
        favorites: inFavoriteList,
        isFavoritesLoad: true
      });
  });

  it(`Reducer should update offers by load offers`, () => {
    const state = mockState;
    const loadOffers = {
      type: ActionType.LOAD_OFFERS,
      payload: Offers
    };

    expect(offerData(state, loadOffers))
      .toEqual({
        ...state,
        offers: Offers,
        currentOffers: getSorting(Offers, state.currentCity, state.currentOption),
        currentLocation: getCityLocation(Offers, state.currentCity),
        isDataLoaded: true
      });
  });
});
