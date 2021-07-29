import React, { createContext, useContext } from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from 'recoil';

import P from '../../../P';

const numberAtom = atom({
  key: 'number',
  default: 0,
});

class NumberAtomInteractor {
  private setNumberValue!: (numberValue: number) => void;

  public init(setNumberValue: (numberValue: number) => void) {
    this.setNumberValue = setNumberValue;
  }

  public randomise() {
    this.setNumberValue(Math.floor(Math.random() * 100));
  }

  public setTo100() {
    this.setNumberValue(100);
  }
}

const NumberAtomInteractorContext = createContext<
  NumberAtomInteractor | undefined
>(undefined);

const DisplayNumber: React.FC = () => {
  const numberValue = useRecoilValue(numberAtom);

  return <P>The number value is {numberValue}</P>;
};

const RandomiseNumber: React.FC = () => {
  const numberAtomInteractor = useContext(
    NumberAtomInteractorContext
  ) as NumberAtomInteractor;

  return (
    <button onClick={() => numberAtomInteractor.randomise()}>
      Randomise the number value
    </button>
  );
};

const SetToOneHundred: React.FC = () => {
  const numberAtomInteractor = useContext(
    NumberAtomInteractorContext
  ) as NumberAtomInteractor;

  return (
    <button onClick={() => numberAtomInteractor.setTo100()}>
      Set the number value to 100
    </button>
  );
};

export const AppInteractorsWrapper: React.FC = ({ children }) => {
  const setNumberValue = useRecoilState(numberAtom)[1];
  const numberAtomInteractor = useContext(
    NumberAtomInteractorContext
  ) as NumberAtomInteractor;

  numberAtomInteractor.init(setNumberValue);

  return <>{children}</>;
};

export const ProviderService: React.FC = () => {
  return (
    <NumberAtomInteractorContext.Provider value={new NumberAtomInteractor()}>
      <RecoilRoot>
        <AppInteractorsWrapper>
          <DisplayNumber />
          <RandomiseNumber />
          <SetToOneHundred />
        </AppInteractorsWrapper>
      </RecoilRoot>
    </NumberAtomInteractorContext.Provider>
  );
};

export default ProviderService;
