import React, { useState } from 'react';
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

const SimpleState: React.FC = () => {
  const [numberMobX] = useState(() => new NumberMobX());

  return (
    <>
      <P>The number value is {numberMobX.value}</P>
      <button onClick={() => numberMobX.increaseValue()}>
        Increase the state value by 1
      </button>
    </>
  );
};

const SimpleStateWithObserver = observer(SimpleState);

export default SimpleStateWithObserver;
