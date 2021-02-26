import React from 'react';

import styles from './styles.scss';

export const Footer: React.FC = ({ children }) => (
  <div className={styles.footer}>{children}</div>
);

export default Footer;
