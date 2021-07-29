import React, { useState } from 'react';

import useForceUpdate from '../../../../hooks/useForceUpdate';

import P from '../../../P';

export const PersistBetweenRenders: React.FC = () => {
  const forceUpdate = useForceUpdate();
  const [numberValue, setNumberValue] = useState(0);

  return (
    <>
      <P>The number value is {numberValue}</P>
      <button onClick={() => setNumberValue(numberValue + 1)}>
        Increase the state value by 1
      </button>
      <br />
      <button onClick={() => forceUpdate()}>Rerender</button>
    </>
  );
};

export default PersistBetweenRenders;
