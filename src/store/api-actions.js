import {ActionCreator} from './action';
import {AuthorizationStatus, Inquiry} from '../constants';
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

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(Inquiry.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
