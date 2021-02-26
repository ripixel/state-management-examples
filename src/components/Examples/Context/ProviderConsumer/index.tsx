import React, { createContext } from 'react';

import P from '../../../P';

const NumberContext = createContext<number | undefined>(undefined);

export const ProviderConsumer: React.FC = () => {
  return (
    <NumberContext.Provider value={0}>
      <NumberContext.Consumer>
        {(value) => <P>The value is {value}</P>}
      </NumberContext.Consumer>
    </NumberContext.Provider>
  );
};

export default ProviderConsumer;
