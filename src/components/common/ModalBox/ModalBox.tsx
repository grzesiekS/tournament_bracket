import React from 'react';

import styles from './ModalBox.module.scss';

export const ModalBox: React.FC = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);