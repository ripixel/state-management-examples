import React from 'react';
import ByJamesKing from '../ByJamesKing';

import Heading from '../Heading';

import styles from './styles.scss';

export const Frame: React.FC = ({ children }) => (
  <div className={styles.frame}>
    <Heading level={1} isTitle>
      State Management Examples in React
    </Heading>
    <ByJamesKing />
    {children}
  </div>
);

export default Frame;
