import {adaptComments, adaptOffers, offerAdapter} from '../../services/adapter';
import {ActionType} from '../action';
import {Offers, Comments} from '../../mocks/mocks';
import {Inquiry} from '../../constants';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {
  fetchOfferList,
  fetchDetailOffer,
  fetchNearbyList,
  fetchCommentList,
  favoriteList,
  commentsPost,
  favoriteStatus
} from '../api-actions';

const api = createAPI(() => {});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOfferList();
    const offers = Offers;
    const data = adaptOffers(offers);

    apiMock
        .onGet(Inquiry.HOTELS)
        .reply(200, data);

    return offersLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS,
        payload: offers,
      });
    });
  });

  it(`Should make a correct API call to /hotels/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offer = Offers[1];
    const data = offerAdapter(offer);
    const {id} = data;
    const detailOfferLoader = fetchDetailOffer(id);

    apiMock
        .onGet(`${Inquiry.HOTELS}/${id}`)
        .reply(200, data);

    return detailOfferLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_DETAILS,
        payload: offer,
      });
    });
  });

  it(`Should make a correct API call to /hotels/id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offer = Offers[1];
    const {id} = offer;
    const offers = Offers;
    const data = adaptOffers(offers);
    const nearbyListLoader = fetchNearbyList(id);

    apiMock
        .onGet(`${Inquiry.HOTELS}/${id}${Inquiry.NEARBY}`)
        .reply(200, data);

    return nearbyListLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_NEARBY,
        payload: offers,
      });
    });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const comment = Comments[1];
    const {id} = comment;
    const comments = Comments;
    const data = adaptComments(comments);
    const commentsListLoader = fetchCommentList(id);

    apiMock
        .onGet(`${Inquiry.COMMENTS}/${id}`)
        .reply(200, data);

    return commentsListLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_COMMENTS,
        payload: comments,
      });
    });
  });

  it(`Should make a correct API post to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userComment = Comments[1];
    const {id, comment, rating} = userComment;
    const comments = Comments;
    const data = adaptComments(comments);
    const postComment = commentsPost(id, {comment, rating});

    apiMock
        .onPost(`${Inquiry.COMMENTS}/${id}`, {comment, rating})
        .reply(200, data);

    return postComment(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.ADDED_COMMENT,
        payload: comments,
      });
    });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offers = Offers;
    const data = adaptOffers(offers);
    const favoritesListLoader = favoriteList();

    apiMock
        .onGet(Inquiry.FAVORITE)
        .reply(200, data);

    return favoritesListLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITES,
        payload: offers,
      });
    });
  });

  it(`Should make a correct API call to /favorite/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offer = Offers[1];
    const {id} = offer;
    const favorite = offer.isFavorite = 1;
    const data = offerAdapter(offer);
    const favoriteChangeStatus = favoriteStatus({id, favorite});

    apiMock
        .onPost(`${Inquiry.FAVORITE}/${id}/${favorite}`)
        .reply(200, data);

    return favoriteChangeStatus(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_STATUS,
        payload: offer,
      });
    });
  });
});
