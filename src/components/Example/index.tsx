import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './styles.scss';

interface Props {
  codeString: string;
}

export const Example: React.FC<Props> = ({ children, codeString }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <>
      <div className={styles.example}>
        {children}
        <button
          className={styles.button}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide' : 'Show'} Code
        </button>
      </div>

      <div
        className={`${styles.code} ${
          showCode ? styles.showCode : styles.hideCode
        }`}
      >
        <SyntaxHighlighter language='typescript' style={tomorrow}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Example;
