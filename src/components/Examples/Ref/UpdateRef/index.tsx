import React, { useRef } from 'react';

import useForceUpdate from '../../../../hooks/useForceUpdate';

export const FocusButtonWithRerender: React.FC = () => {
  const forceUpdate = useForceUpdate();

  const valueRef = useRef<number>(0);

  const onButtonClick = () => {
    valueRef.current = valueRef.current + 1;
  };

  return (
    <>
      <p>Current value: {valueRef.current}</p>
      <button onClick={onButtonClick}>Increase value by 1</button>
      <br />
      <button onClick={() => forceUpdate()}>Rerender</button>
    </>
  );
};

export default FocusButtonWithRerender;
