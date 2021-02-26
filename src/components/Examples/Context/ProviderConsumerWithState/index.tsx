import React, { createContext, useState } from 'react';

import P from '../../../P';

const NumberContext = createContext<number | undefined>(undefined);

export const ProviderConsumerWithState: React.FC = () => {
  const [value, setValue] = useState(0);

  const onButtonClick = () => {
    setValue(value + 1);
  };

  return (
    <>
      <NumberContext.Provider value={value}>
        <NumberContext.Consumer>
          {(value) => <P>The value is {value}</P>}
        </NumberContext.Consumer>
      </NumberContext.Provider>
      <button onClick={onButtonClick}>Increase the context value by 1</button>
    </>
  );
};

export default ProviderConsumerWithState;
