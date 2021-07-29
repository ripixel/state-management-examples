import React, { useState } from 'react';

import P from '../../../P';

export const UpdateSingleBitOfState: React.FC = () => {
  const [numberValue, setNumberValue] = useState(0);

  return (
    <>
      <P>The number value is {numberValue}</P>
      <button onClick={() => setNumberValue(numberValue + 1)}>
        Increase the state value by 1
      </button>
    </>
  );
};

export default UpdateSingleBitOfState;
