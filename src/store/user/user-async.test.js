import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {checkAuth, login, logout} from '../api-actions';
import {AuthorizationStatus, Inquiry, Path} from '../../constants';
import {ActionType} from '../action';

const api = createAPI(() => {});
let dispatch;
let apiMock;

describe(`Async operation work correctly`, () => {
  beforeEach(()=>{
    apiMock = new MockAdapter(api);
    dispatch = jest.fn();
  });

  it(`Should make a correct API call to /login`, () => {
    const checkAuthLoader = checkAuth();
    const data = {
      email: `value`,
      status: AuthorizationStatus.AUTH
    };

    apiMock
      .onGet(Inquiry.LOGIN)
      .reply(200, data);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: data.status,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.USER_VALUE,
          payload: data.email,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(Inquiry.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: Path.MAIN,
        });
      });
  });

  it(`Should make a correct API call to /logout`, () => {
    const logoutLoader = logout();
    const data = {
      status: AuthorizationStatus.NO_AUTH,
      route: Path.MAIN
    };

    apiMock
      .onGet(Inquiry.LOGOUT)
      .reply(200, data);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: data.status,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: data.route,
        });
      });
  });
});
