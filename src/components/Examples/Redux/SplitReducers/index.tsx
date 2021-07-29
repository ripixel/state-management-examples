/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from 'react';
import { connect, Provider } from 'react-redux';
import {
  Action as ReduxAction,
  combineReducers,
  createStore,
  Dispatch,
  Reducer,
} from 'redux';

import P from '../../../P';

interface Action<T = unknown> extends ReduxAction<string> {
  payload: T;
}

interface ReduxState {
  text: {
    value: string;
  };
  number: {
    value: number;
  };
}

// SETUP REDUX REDUCERS
const numberReducer: Reducer<ReduxState['number'], Action> = (
  state,
  action
) => {
  if (!state) {
    state = {
      value: 0,
    };
  }

  switch (action.type) {
    case 'SET_NUMBER':
      return { ...state, value: action.payload as number };
  }

  return state;
};
const textReducer: Reducer<ReduxState['text'], Action> = (state, action) => {
  if (!state) {
    state = {
      value: 'hello',
    };
  }

  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, value: action.payload as string };
  }

  return state;
};

// SETUP REDUX STORE
const store = createStore(
  combineReducers({
    text: textReducer,
    number: numberReducer,
  })
);

const NumberComponent: React.FC<{
  numberValue?: number;
  dispatch: Dispatch;
}> = ({ numberValue, dispatch }) => (
  <>
    <P>The number value is {numberValue}</P>
    <button
      onClick={() =>
        dispatch!({
          type: 'SET_NUMBER',
          payload: numberValue! + 1,
        })
      }
    >
      Increase the number state value by 1
    </button>
  </>
);

const TextComponent: React.FC<{ textValue?: string; dispatch: Dispatch }> = ({
  textValue,
  dispatch,
}) => (
  <>
    <P>The text value is {textValue}</P>
    <button
      onClick={() =>
        dispatch!({
          type: 'SET_TEXT',
          payload: textValue === 'hello' ? 'goodbye' : 'hello',
        })
      }
    >
      Flip the text state between hello and goodbye
    </button>
  </>
);

// CREATE OUR REDUX STATE -> PROPS MAPPER
const numberMapStateToProps = (state: ReduxState) => ({
  numberValue: state.number.value,
});
const ConnectedNumber = connect(numberMapStateToProps)(NumberComponent);

const textMapStateToProps = (state: ReduxState) => ({
  textValue: state.text.value,
});
const ConnectedText = connect(textMapStateToProps)(TextComponent);

const SomeParentWithNoStateConnection: React.FC = () => (
  <>
    <ConnectedNumber />
    <ConnectedText />
  </>
);

// WRAP THE APP WITH THE REDUX PROVIDER
const SplitReducersWithProvider: React.FC = () => (
  <Provider store={store}>
    <SomeParentWithNoStateConnection />
  </Provider>
);

export default SplitReducersWithProvider;
