import React, { createContext, useContext } from 'react';

import useForceUpdate from '../../../../hooks/useForceUpdate';

import P from '../../../P';

const NumberContext = createContext<number | undefined>(undefined);

declare global {
  interface Window {
    value: number;
  }
}

window.value = 0;

export const ShowValue: React.FC = () => {
  const numberContext = useContext(NumberContext);

  return <P>The value is {numberContext}</P>;
};

export const ProviderUseContext: React.FC = () => {
  const forceUpdate = useForceUpdate();

  const onButtonClick = () => {
    window.value = window.value + 1;
  };

  return (
    <>
      <NumberContext.Provider value={window.value}>
        <ShowValue />
      </NumberContext.Provider>
      <button onClick={onButtonClick}>Increase the context value by 1</button>
      <br />
      <button onClick={() => forceUpdate()}>Rerender</button>
    </>
  );
};

export default ProviderUseContext;
