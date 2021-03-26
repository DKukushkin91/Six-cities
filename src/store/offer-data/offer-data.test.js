import {offerData} from './offer-data';
import {ActionType} from '../action';
import {Offers, DetailOffer, FavoritesList, Comments} from '../../mocks/mocks';
import {DEFAULT_CITY, DEFAULT_LOCATION, CURRENT_SORTING} from '../../constants';
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
};

describe(`Reducer 'offerData' should work correctly`, () => {

  // /////Не работает 3 теста
  it(`Reducer should update city by change city`, () => {
    const state = mockState;
    const testCity = `Amsterdam`;
    const changeCurrentCity = {
      type: ActionType.CHANGE_CURRENT_CITY,
      payload: testCity
    };

    expect(offerData(state, changeCurrentCity))
      .toEqual({
        ...state,
        currentCity: testCity,
        currentOffers: getSorting(Offers, testCity),
        currentLocation: getCityLocation(Offers, testCity),
        currentOption: state.currentOption,
      });
  });

  it(`Reducer should update favorite status`, () => {
    const state = mockState;
    const offer = Offers[0];
    const changedOffer = {...offer, isFavorite: !offer.isFavorite};
    const changeStatus = {
      type: ActionType.CHANGE_STATUS,
      payload: changedOffer
    };

    expect(offerData(state, changeStatus))
      .toEqual({
        ...state,
        currentOffers: changeFavoriteOffer(Offers, changedOffer),
        favorites: changeFavorites(FavoritesList, changedOffer),
        nearbyOffers: changeNearbyOffers(Offers, changedOffer),
        offerDetails: changeCurrentOffer(DetailOffer, changedOffer),
      });
  });

  it(`Reducer should update option by change options`, () => {
    const state = mockState;
    const changeOption = {
      type: ActionType.CHANGE_OPTION,
      payload: CURRENT_SORTING
    };

    expect(offerData(state, changeOption))
      .toEqual({
        ...state,
        currentOption: CURRENT_SORTING,
        currentOffers: getSorting(Offers, DEFAULT_CITY, CURRENT_SORTING)
      });
  });

  // /////////// Всё ОК
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offerData(undefined, {}))
      .toEqual(mockState);
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
      payload: FavoritesList
    };

    expect(offerData(state, loadFavoritesList))
      .toEqual({
        ...state,
        favorites: FavoritesList,
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