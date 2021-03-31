import MockAdapter from 'axios-mock-adapter';
import {createAPI} from './api';
import {ErrorMessageType} from '../constants';

const api = createAPI(()=> {});
let mockApi;

describe(`Test api`, () => {
  beforeEach(() => {
    mockApi = new MockAdapter(api);
  });

  it(`Should returns error with message 'Network unavailable'`, () => {
    mockApi
      .onGet(`/offers`)
      .networkError();

    api.get(`/offers`)
      .catch((err) => {
        expect(err).toStrictEqual(new Error(ErrorMessageType.NETWORK_ERROR));
      });
  });

  it(`Should returns error with message 'Invalid data format'`, () => {
    mockApi
      .onGet(`/offers`)
      .reply(400, {});

    api.get(`/offers`)
      .catch((err) => {
        expect(err).toStrictEqual(new Error(ErrorMessageType.BAD_REQUEST));
      });
  });

  it(`Should returns error`, () => {
    mockApi
      .onGet(`/offers`)
      .reply(401, {});

    api.get(`/offers`)
      .catch((err) => {
        expect(err).toStrictEqual(new Error(`Request failed with status code 401`));
      });
  });
});
