import React, { useRef } from 'react';

export const FocusButton: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current?.focus();
  };

  return (
    <>
      <input ref={inputEl} type='text' />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default FocusButton;
