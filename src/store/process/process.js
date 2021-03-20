import {createReducer} from '@reduxjs/toolkit';
import {changeActiveOffer} from '../action';

const initialState = {
  activeCardId: null
};

const process = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveOffer, (state, action) => {
    state.activeCardId = action.payload;
  });

});

export {process};
