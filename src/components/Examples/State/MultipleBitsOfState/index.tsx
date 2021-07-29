import React, { useState } from 'react';

import P from '../../../P';

export const MultipleBitsOfState: React.FC = () => {
  const [numberValue, setNumberValue] = useState(0);
  const [textValue, setTextValue] = useState('hello');

  return (
    <>
      <P>
        The number value is {numberValue}, and the text value is {textValue}
      </P>
      <button onClick={() => setNumberValue(numberValue + 1)}>
        Increase the number state value by 1
      </button>
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

export default MultipleBitsOfState;
