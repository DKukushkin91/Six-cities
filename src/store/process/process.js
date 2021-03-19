import {createReducer} from '@reduxjs/toolkit';
import {hoverOffer} from '../action';

const initialState = {
  activeCardId: null
};

const process = createReducer(initialState, (builder) => {
  builder.addCase(hoverOffer, (state, action) => {
    state.activeCardId = action.payload;
  });

});

export {process};
