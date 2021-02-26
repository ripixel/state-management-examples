import { createStore } from 'redux';

import store from '.';
store; // stops no-unused-vars issue

jest.mock('redux');
jest.mock('./reducers', () => 'rootReducer');
jest.mock('@sentry/react');

describe('Store', () => {
  it('inits correctly', () => {
    expect(createStore as jest.Mock).toHaveBeenCalledTimes(1);
    expect(createStore as jest.Mock).toHaveBeenCalledWith(
      'rootReducer',
      undefined // composed enhancers
    );
  });
});
