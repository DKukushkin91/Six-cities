import {combineReducers} from 'redux';
import {offerData} from './offer-data/offer-data';
import {user} from './user/user';
import {process} from './process/process';

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: offerData,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user,
});
