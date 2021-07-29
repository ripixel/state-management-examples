/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from 'react';
import { connect, Provider } from 'react-redux';
import { Action as ReduxAction, createStore, Dispatch, Reducer } from 'redux';

import P from '../../../P';

interface Action<T = unknown> extends ReduxAction<string> {
  payload: T;
}

interface ReduxState {
  textValue: string;
  numberValue: number;
}

// SETUP REDUX REDUCER
const exampleReducer: Reducer<ReduxState, Action> = (state, action) => {
  if (!state) {
    state = {
      textValue: 'hello',
      numberValue: 0,
    };
  }

  switch (action.type) {
    case 'SET_NUMBER':
      return { ...state, numberValue: action.payload as number };
    case 'SET_TEXT':
      return { ...state, textValue: action.payload as string };
  }

  return state;
};

// SETUP REDUX STORE
const store = createStore(exampleReducer, {
  textValue: 'hello',
  numberValue: 0,
});

const UseStateRefactor: React.FC<{
  textValue?: string;
  numberValue?: number;
  dispatch?: Dispatch;
}> = ({ textValue, numberValue, dispatch }) => {
  return (
    <>
      <P>
        The number value is {numberValue}, and the text value is {textValue}
      </P>
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
};

// CREATE OUR REDUX STATE -> PROPS MAPPER
const mapStateToProps = (state: ReduxState) => ({
  textValue: state.textValue,
  numberValue: state.numberValue,
});

const ConnectedUseStateRefactor = connect(mapStateToProps)(UseStateRefactor);

// WRAP THE APP WITH THE REDUX PROVIDER
const UseStateRefactorWithProvider: React.FC = () => (
  <Provider store={store}>
    <ConnectedUseStateRefactor />
  </Provider>
);

export default UseStateRefactorWithProvider;
