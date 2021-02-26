import React, { createContext, useContext } from 'react';

import P from '../../../P';

const NumberContext = createContext<number | undefined>(undefined);

export const ShowValue: React.FC = () => {
  const numberContext = useContext(NumberContext);

  return <P>The value is {numberContext}</P>;
};

export const ProviderUseContext: React.FC = () => {
  return (
    <NumberContext.Provider value={0}>
      <NumberContext.Provider value={10}>
        <ShowValue />
      </NumberContext.Provider>
    </NumberContext.Provider>
  );
};

export default ProviderUseContext;
