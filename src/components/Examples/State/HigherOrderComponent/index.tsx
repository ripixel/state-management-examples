import React, { useState } from 'react';

import P from '../../../P';

const DisplayText: React.FC<{ textValue: string }> = ({ textValue }) => (
  <P>The text value is {textValue}</P>
);
const DisplayNumber: React.FC<{ numberValue: number }> = ({ numberValue }) => (
  <P>The number value is {numberValue}</P>
);

export const HigherOrderComponent: React.FC = () => {
  const [numberValue, setNumberValue] = useState(0);
  const [textValue, setTextValue] = useState('hello');

  return (
    <>
      <DisplayNumber numberValue={numberValue} />

      <button onClick={() => setNumberValue(numberValue + 1)}>
        Increase the number state value by 1
      </button>

      <DisplayText textValue={textValue} />
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

export default HigherOrderComponent;
