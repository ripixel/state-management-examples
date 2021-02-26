import React, { createContext, useContext } from 'react';

import P from '../../../P';

const NumberContext = createContext<number | undefined>(undefined);
const TextContext = createContext<string | undefined>(undefined);

export const ShowNumberValue: React.FC = () => {
  const numberContext = useContext(NumberContext);

  return <P>The number value is {numberContext}</P>;
};

export const ShowTextValue: React.FC = () => {
  const textContext = useContext(TextContext);

  return <P>The text value is {textContext}</P>;
};

export const ShowBothValues: React.FC = () => {
  const textContext = useContext(TextContext);
  const numberContext = useContext(NumberContext);

  return (
    <P>
      The text value is {textContext}, and the number value is {numberContext}
    </P>
  );
};

export const ProviderUseContext: React.FC = () => {
  return (
    <NumberContext.Provider value={0}>
      <TextContext.Provider value='Hello!'>
        <ShowNumberValue />
        <ShowTextValue />
        <ShowBothValues />
      </TextContext.Provider>
    </NumberContext.Provider>
  );
};

export default ProviderUseContext;
