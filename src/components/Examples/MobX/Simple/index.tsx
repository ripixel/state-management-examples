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

const Simple: React.FC<{ numberMobX: NumberMobX }> = ({ numberMobX }) => {
  return (
    <>
      <P>The number value is {numberMobX.value}</P>
      <button onClick={() => numberMobX.increaseValue()}>
        Increase the state value by 1
      </button>
    </>
  );
};

const SimpleWithObserver = observer(Simple);

const SimpleWithObserverInit: React.FC = () => (
  <SimpleWithObserver numberMobX={myNumberMobX} />
);

export default SimpleWithObserverInit;
