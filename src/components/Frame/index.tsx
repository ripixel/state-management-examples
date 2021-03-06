import React from 'react';
import { Link } from 'react-router-dom';
import ByJamesKing from '../ByJamesKing';

import Heading from '../Heading';

import styles from './styles.scss';

export const Frame: React.FC = ({ children }) => (
  <div className={styles.frame}>
    <Link to='/'>
      <Heading level={1} isTitle>
        State Management Examples in React
      </Heading>
      <ByJamesKing />
    </Link>
    {children}
  </div>
);

export default Frame;
