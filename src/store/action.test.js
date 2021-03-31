import {Offers, DetailOffer, Comments, FavoritesList} from '../mocks/mocks';
import {DEFAULT_CITY, CURRENT_SORTING, AuthorizationStatus} from '../constants';
import {
  changeCity,
  changeOption,
  changeActiveOffer,
  loadOffers,
  loadDetailOffer,
  loadComments,
  requireAuthorization,
  changeValue,
  redirectToRoute,
  loadNearby,
  addedComment,
  changeStatus,
  loadFavorites,
  ActionType,
  setError
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creators for change city returns correct action`, () => {
    const city = {
      name: DEFAULT_CITY
    };
    const expectedAction = {
      type: ActionType.CHANGE_CURRENT_CITY,
      payload: city,
    };

    expect(changeCity(city)).toEqual(expectedAction);
  });

  it(`Action creators for change option returns correct action`, () => {
    const option = {
      name: CURRENT_SORTING
    };
    const expectedAction = {
      type: ActionType.CHANGE_OPTION,
      payload: option
    };

    expect(changeOption(option)).toEqual(expectedAction);
  });

  it(`Action creators for change active offer returns correct action`, () => {
    const id = {
      id: Number()
    };
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_OFFER,
      payload: id
    };

    expect(changeActiveOffer(id)).toEqual(expectedAction);
  });

  it(`Action creators for load offers returns correct action`, () => {
    const offers = {
      offers: Offers
    };
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it(`Action creators for load detail offers returns correct action`, () => {
    const offer = {
      offer: DetailOffer
    };
    const expectedAction = {
      type: ActionType.LOAD_DETAILS,
      payload: offer
    };

    expect(loadDetailOffer(offer)).toEqual(expectedAction);
  });

  it(`Action creators for load comments returns correct action`, () => {
    const comments = {
      comments: Comments
    };
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it(`Action creators for required authorization status returns correct action`, () => {
    const status = {
      status: AuthorizationStatus.AUTH
    };
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action creators for change value returns correct action`, () => {
    const value = {
      value: `test@mail.ru`
    };
    const expectedAction = {
      type: ActionType.USER_VALUE,
      payload: value
    };

    expect(changeValue(value)).toEqual(expectedAction);
  });

  it(`Action creators for redirect to route returns correct action`, () => {
    const url = {
      url: `htmlacademy.ru`
    };

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it(`Action creators for load nearby returns correct action`, () => {
    const nearby = {
      nearby: Offers
    };

    const expectedAction = {
      type: ActionType.LOAD_NEARBY,
      payload: nearby
    };

    expect(loadNearby(nearby)).toEqual(expectedAction);
  });

  it(`Action creators for added comment returns correct action`, () => {
    const comment = {
      comment: Comments
    };

    const expectedAction = {
      type: ActionType.ADDED_COMMENT,
      payload: comment
    };

    expect(addedComment(comment)).toEqual(expectedAction);
  });

  it(`Action creators for change favorite status returns correct action`, () => {
    const favorite = {
      favorite: FavoritesList
    };

    const expectedAction = {
      type: ActionType.CHANGE_STATUS,
      payload: favorite
    };

    expect(changeStatus(favorite)).toEqual(expectedAction);
  });

  it(`Action creators for load favorites list returns correct action`, () => {
    const favorites = {
      favorites: FavoritesList
    };

    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites
    };

    expect(loadFavorites(favorites)).toEqual(expectedAction);
  });

  it(`Action creator for set error return correct action with "Network Error" payload`, () => {
    const expectedAction = {
      type: ActionType.SET_ERROR,
      payload: `Network Error`,
    };

    expect(setError(`Network Error`)).toEqual(expectedAction);
  });

});
