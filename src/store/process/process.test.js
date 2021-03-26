import {process} from './process';
import {changeActiveOffer} from '../action';

describe(`Reduce work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(process(undefined, {})).toEqual({activeCardId: null});
  });

  it(`Reducer should activeCardId a given value`, () => {
    const state = {activeCardId: null};
    expect(process(state, changeActiveOffer(1))).toEqual({activeCardId: 1});
  });
});
