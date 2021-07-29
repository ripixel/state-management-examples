import React, { useState } from 'react';
import { RecoilRoot, atom, useRecoilState } from 'recoil';

import P from '../../../P';

const numberAtom = atom({
  key: 'number',
  default: 0,
});

class NumberAtomInteractor {
  private setNumberValue: (numberValue: number) => void;

  constructor(setNumberValue: (numberValue: number) => void) {
    this.setNumberValue = setNumberValue;
  }

  public randomise() {
    this.setNumberValue(Math.floor(Math.random() * 100));
  }
}

const DisplayNumber: React.FC = () => {
  const [numberValue, setNumberValue] = useRecoilState(numberAtom);
  const [numberAtomInteractor] = useState(
    new NumberAtomInteractor(setNumberValue)
  );

  return (
    <>
      <P>The number value is {numberValue}</P>

      <button onClick={() => numberAtomInteractor.randomise()}>
        Randomise the number value
      </button>
    </>
  );
};

export const UsingRecoilOutsideReact: React.FC = () => (
  <RecoilRoot>
    <DisplayNumber />
  </RecoilRoot>
);

export default UsingRecoilOutsideReact;
