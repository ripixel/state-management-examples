import React, { createContext, useContext } from 'react';
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

const NumberMobXContext = createContext<NumberMobX | undefined>(undefined);

const RelyOnContext: React.FC = () => {
  const numberMobX = useContext(NumberMobXContext) as NumberMobX;

  return (
    <>
      <P>The number value is {numberMobX.value}</P>
      <button onClick={() => numberMobX.increaseValue()}>
        Increase the state value by 1
      </button>
    </>
  );
};

const AnotherConsumerOfRelyOnContext: React.FC = () => {
  const numberMobX = useContext(NumberMobXContext) as NumberMobX;

  return (
    <>
      <P>The number value multiplied by two is {numberMobX.value * 2}</P>
    </>
  );
};

const RelyOnContextWithObserver = observer(RelyOnContext);
const AnotherConsumerOfRelyOnContextWithObserver = observer(
  AnotherConsumerOfRelyOnContext
);

const Examples: React.FC = () => (
  <NumberMobXContext.Provider value={new NumberMobX()}>
    <RelyOnContextWithObserver />
    <AnotherConsumerOfRelyOnContextWithObserver />
  </NumberMobXContext.Provider>
);

export default Examples;
