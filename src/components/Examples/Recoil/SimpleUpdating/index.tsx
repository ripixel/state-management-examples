import React from 'react';
import { RecoilRoot, atom, useRecoilState } from 'recoil';

import P from '../../../P';

const sharedStateAtom = atom({
  key: 'textAndNumberState',
  default: {
    numberValue: 0,
    textValue: 'hello',
  },
});

const DisplayText: React.FC = () => {
  const [sharedState, setSharedState] = useRecoilState(sharedStateAtom);

  return (
    <>
      <P>The text value is {sharedState.textValue}</P>

      <button
        onClick={() =>
          setSharedState({
            ...sharedState,
            textValue: sharedState.textValue === 'hello' ? 'goodbye' : 'hello',
          })
        }
      >
        Flip the text state between hello and goodbye
      </button>
    </>
  );
};

const DisplayNumber: React.FC = () => {
  const [sharedState, setSharedState] = useRecoilState(sharedStateAtom);

  return (
    <>
      <P>The number value is {sharedState.numberValue}</P>

      <button
        onClick={() =>
          setSharedState({
            ...sharedState,
            numberValue: sharedState.numberValue + 1,
          })
        }
      >
        Increase the number state by 1
      </button>
    </>
  );
};

export const SimpleUpdating: React.FC = () => (
  <RecoilRoot>
    <DisplayNumber />
    <DisplayText />
  </RecoilRoot>
);

export default SimpleUpdating;
