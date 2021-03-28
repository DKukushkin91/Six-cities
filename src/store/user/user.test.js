import {user} from './user';
import {AuthorizationStatus} from '../../constants';
import {ActionType} from '../action';

describe(`Reducer 'user' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, userValue: ``});
  });

  it(`Reducer should update authorizationStatus to 'auth' and change userValue`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH,
      userValue: ``};

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    const changeValue = {
      type: ActionType.USER_VALUE,
      payload: `User`
    };

    expect(user(state, requiredAuthorizationAction, changeValue))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH, userValue: ``});
  });
});
