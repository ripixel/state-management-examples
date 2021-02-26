/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, compose } from 'redux';
import rootReducer, { State } from './reducers';
import { Action } from './actions/types';
import { createReduxEnhancer } from '@sentry/react';

const sentryReduxEnhancer = createReduxEnhancer();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<State, Action, unknown, unknown>(
  rootReducer,
  composeEnhancers(sentryReduxEnhancer)
);

export default store;
