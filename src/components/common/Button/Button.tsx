import React from 'react';

import styles from './Button.module.scss';

interface ButtonInt {
  title: string,
  actionOnClick?: () => void,
}

export const Button: React.FC<ButtonInt> = ({ title, actionOnClick, children }) => {
  return (
    <button 
      className={styles.button}
      onClick={actionOnClick}
    >
      {title}
      {children}
    </button>
  );
}; 