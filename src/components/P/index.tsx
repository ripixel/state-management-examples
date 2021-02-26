import React from 'react';

import styles from './styles.scss';

export const P: React.FC = ({ children }) => {
  return <p className={styles.p}>{children}</p>;
};

export default P;
