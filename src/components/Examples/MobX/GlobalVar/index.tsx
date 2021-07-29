import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

import P from '../../../P';

class NumberMobX {
  public value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseValue() {
    this.value += 1;
  }
}

const myNumberMobX = new NumberMobX();

const GlobalVar: React.FC = () => {
  return (
    <>
      <P>The number value is {myNumberMobX.value}</P>
      <button onClick={() => myNumberMobX.increaseValue()}>
        Increase the state value by 1
      </button>
    </>
  );
};

const AnotherConsumerOfGlobalVar: React.FC = () => {
  return (
    <>
      <P>The number value multiplied by two is {myNumberMobX.value * 2}</P>
    </>
  );
};

const GlobalVarWithObserver = observer(GlobalVar);
const AnotherConsumerOfGlobalVarWithObserver = observer(
  AnotherConsumerOfGlobalVar
);

const Examples: React.FC = () => (
  <>
    <GlobalVarWithObserver />
    <AnotherConsumerOfGlobalVarWithObserver />
  </>
);

export default Examples;
