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

class ComputedNumberMobX {
  private numberMobX: NumberMobX;

  constructor(numberMobX: NumberMobX) {
    this.numberMobX = numberMobX;
  }

  get multipliedByTwo() {
    return this.numberMobX.value * 2;
  }
}

const NumberMobXContext = createContext<NumberMobX | undefined>(undefined);

const ComputedNumberMobXContext = createContext<ComputedNumberMobX | undefined>(
  undefined
);

const NumberMobXConsumer: React.FC = () => {
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

const ComputedNumberMobXConsumer: React.FC = () => {
  const computedNumberMobX = useContext(
    ComputedNumberMobXContext
  ) as ComputedNumberMobX;

  return (
    <>
      <P>
        The number value multiplied by two is{' '}
        {computedNumberMobX.multipliedByTwo}
      </P>
    </>
  );
};

const NumberMobXConsumerWithObserver = observer(NumberMobXConsumer);
const ComputedNumberMobXConsumerWithObserver = observer(
  ComputedNumberMobXConsumer
);

const Examples: React.FC = () => {
  const myNumberMobX = new NumberMobX();
  const myComputedNumberMobX = new ComputedNumberMobX(myNumberMobX);

  return (
    <NumberMobXContext.Provider value={myNumberMobX}>
      <ComputedNumberMobXContext.Provider value={myComputedNumberMobX}>
        <NumberMobXConsumerWithObserver />
        <ComputedNumberMobXConsumerWithObserver />
      </ComputedNumberMobXContext.Provider>
    </NumberMobXContext.Provider>
  );
};

export default Examples;
