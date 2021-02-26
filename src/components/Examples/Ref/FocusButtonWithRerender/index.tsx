import React, { useRef } from 'react';

import useForceUpdate from '../../../../hooks/useForceUpdate';

export const FocusButtonWithRerender: React.FC = () => {
  const forceUpdate = useForceUpdate();

  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current?.focus();
  };

  return (
    <>
      <input ref={inputEl} type='text' />
      <button onClick={onButtonClick}>Focus the input</button>
      <br />
      <button onClick={() => forceUpdate()}>Rerender</button>
    </>
  );
};

export default FocusButtonWithRerender;
