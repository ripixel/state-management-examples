import React, { createContext } from 'react';

import P from '../../../P';

const NumberContext = createContext<number | undefined>(undefined);

export const ProviderConsumerClosest: React.FC = () => {
  return (
    <NumberContext.Provider value={0}>
      <NumberContext.Provider value={10}>
        <NumberContext.Consumer>
          {(value) => <P>The value is {value}</P>}
        </NumberContext.Consumer>
      </NumberContext.Provider>
    </NumberContext.Provider>
  );
};

export default ProviderConsumerClosest;
