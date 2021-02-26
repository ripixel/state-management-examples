import { useState } from 'react';

export const useForceUpdate = (): (() => void) => {
  const [value, setValue] = useState(0);
  console.log('Forcing update: ', value);
  return () => setValue((value) => value + 1);
};

export default useForceUpdate;
