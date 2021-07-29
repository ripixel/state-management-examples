import React from 'react';
import {
  RecoilRoot,
  atom,
  useRecoilState,
  useRecoilValue,
  selector,
} from 'recoil';

import P from '../../../P';

const numberAtom = atom({
  key: 'number',
  default: 0,
});

const textAtom = atom({
  key: 'text',
  default: 'hello',
});

const multiplyByTwo = selector({
  key: 'multiplyByTwo',
  get: ({ get }) => {
    const numberValue = get(numberAtom);

    return numberValue * 2;
  },
});

const combined = selector({
  key: 'combined',
  get: ({ get }) => {
    const numberValue = get(numberAtom);
    const textValue = get(textAtom);

    return `The number of characters of the text value is ${
      textValue.length
    }, and this divided by the number value is ${
      textValue.length / numberValue
    }`;
  },
});

const DisplayText: React.FC = () => {
  const [textValue, setTextValue] = useRecoilState(textAtom);

  return (
    <>
      <P>The text value is {textValue}</P>

      <button
        onClick={() =>
          setTextValue(textValue === 'hello' ? 'goodbye' : 'hello')
        }
      >
        Flip the text state between hello and goodbye
      </button>
    </>
  );
};

const DisplayNumber: React.FC = () => {
  const [numberValue, setNumberValue] = useRecoilState(numberAtom);

  return (
    <>
      <P>The number value is {numberValue}</P>

      <button onClick={() => setNumberValue(numberValue + 1)}>
        Increase the number state by 1
      </button>
    </>
  );
};

const DisplayMultiplyByTwo: React.FC = () => {
  const multiplied = useRecoilValue(multiplyByTwo);

  return <P>The number value multiplied by two is: {multiplied}</P>;
};

const DisplayCombined: React.FC = () => {
  const combinedValue = useRecoilValue(combined);

  return <P>{combinedValue}</P>;
};

export const ComplexExample: React.FC = () => (
  <RecoilRoot>
    <DisplayNumber />
    <DisplayText />
    <DisplayMultiplyByTwo />
    <DisplayCombined />
  </RecoilRoot>
);

export default ComplexExample;
