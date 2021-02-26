import { combineReducers } from 'redux';

export interface State {
  base: Record<string, unknown>;
}

export const rootReducer = combineReducers<State>({
  base: () => ({}),
});

export default rootReducer;
