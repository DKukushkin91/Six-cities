import {ActionCreator} from './action';
import {AuthorizationStatus, Inquiry, Paths} from '../constants';
import {adaptComments, adaptOffers, offerAdapter} from '../services/adapter';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(Inquiry.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(adaptOffers(data))))
);

export const fetchDetailOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${Inquiry.HOTELS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadDetailOffer(offerAdapter(data))))
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`${Inquiry.HOTELS}/${id}${Inquiry.NEARBY}`)
    .then(({data}) => dispatch(ActionCreator.loadNearby(adaptOffers(data))))
);

export const fetchCommentList = (id) => (dispatch, _getState, api) => (
  api.get(`${Inquiry.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(adaptComments(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(Inquiry.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.changeValue(data.email));
    })
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(Inquiry.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Paths.MAIN)))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(Inquiry.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Paths.MAIN)))
);

export const commentsPost = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${Inquiry.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.addedComment(adaptComments(data))))
);

export const favoriteStatus = (id, favorite) => (dispatch, _getState, api) => (
  api.post(`${Inquiry.FAVORITES}/${id}/${favorite}`)
    .then(({data}) => dispatch(ActionCreator.changeStatus(data)))
);
