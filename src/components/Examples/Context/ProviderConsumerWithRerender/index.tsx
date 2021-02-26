import React, { createContext } from 'react';

import useForceUpdate from '../../../../hooks/useForceUpdate';

import P from '../../../P';

const NumberContext = createContext<number | undefined>(undefined);

declare global {
  interface Window {
    value: number;
  }
}

window.value = 0;

export const ProviderConsumerWithRerender: React.FC = () => {
  const forceUpdate = useForceUpdate();

  const onButtonClick = () => {
    window.value = window.value + 1;
  };

  return (
    <>
      <NumberContext.Provider value={window.value}>
        <NumberContext.Consumer>
          {(value) => <P>The value is {value}</P>}
        </NumberContext.Consumer>
      </NumberContext.Provider>
      <button onClick={onButtonClick}>Increase the context value by 1</button>
      <br />
      <button onClick={() => forceUpdate()}>Rerender</button>
    </>
  );
};

export default ProviderConsumerWithRerender;
