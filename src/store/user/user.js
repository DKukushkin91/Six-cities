import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../constants';
import {changeValue, requireAuthorization} from "../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userValue: ``
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(changeValue, (state, action) => {
    state.userValue = action.payload;
  });
});

export {user};
