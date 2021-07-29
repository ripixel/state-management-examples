import React from 'react';
import { RecoilRoot, atom, useRecoilValue } from 'recoil';

import P from '../../../P';

const sharedStateAtom = atom({
  key: 'textAndNumberState',
  default: {
    numberValue: 0,
    textValue: 'hello',
  },
});

const DisplayText: React.FC = () => {
  const sharedState = useRecoilValue(sharedStateAtom);

  return <P>The text value is {sharedState.textValue}</P>;
};

const DisplayNumber: React.FC = () => {
  const sharedState = useRecoilValue(sharedStateAtom);

  return <P>The number value is {sharedState.numberValue}</P>;
};

export const SimpleSharing: React.FC = () => (
  <RecoilRoot>
    <DisplayNumber />
    <DisplayText />
  </RecoilRoot>
);

export default SimpleSharing;
