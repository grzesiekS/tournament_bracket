import React from 'react';

import styles from './Button.module.scss';

interface ButtonInt {
  title: string,
}

export const Button: React.FC<ButtonInt> = ({ title }) => {
  return (
    <button className={styles.button}>{title}</button>
  );
}; 