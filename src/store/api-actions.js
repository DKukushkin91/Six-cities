import {ActionCreator} from './action';
import {AuthorizationStatus, Inquiry, Paths} from '../constants';
import {adaptOffers} from '../services/adapter';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(Inquiry.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(adaptOffers(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(Inquiry.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(Inquiry.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Paths.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(Inquiry.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Paths.MAIN)))
);
