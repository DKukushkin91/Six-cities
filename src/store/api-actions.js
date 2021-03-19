import {loadOffers, loadDetailOffer, loadNearby, loadComments, requireAuthorization, changeValue,
  redirectToRoute, loadFavorites, addedComment, changeStatus} from './action';
import {AuthorizationStatus, Inquiry, Paths} from '../constants';
import {adaptComments, adaptOffers, offerAdapter} from '../services/adapter';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(Inquiry.HOTELS)
    .then(({data}) => dispatch(loadOffers(adaptOffers(data))))
);

export const fetchDetailOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${Inquiry.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadDetailOffer(offerAdapter(data))))
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`${Inquiry.HOTELS}/${id}${Inquiry.NEARBY}`)
    .then(({data}) => dispatch(loadNearby(adaptOffers(data))))
);

export const fetchCommentList = (id) => (dispatch, _getState, api) => (
  api.get(`${Inquiry.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(adaptComments(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(Inquiry.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(changeValue(data.email));
    })
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(Inquiry.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(redirectToRoute(Paths.MAIN)))
);

export const favoriteList = () => (dispatch, _getState, api) => (
  api.get(Inquiry.FAVORITE)
    .then(({data}) => dispatch(loadFavorites(adaptOffers(data))))
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(Inquiry.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(Paths.MAIN)))
);

export const commentsPost = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${Inquiry.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(addedComment(adaptComments(data))))
);

export const favoriteStatus = ({id, favorite}) => (dispatch, _getState, api) => (
  api.post(`${Inquiry.FAVORITE}/${id}/${favorite}`)
    .then(({data}) => {
      dispatch(changeStatus(offerAdapter(data)));
    })
);
