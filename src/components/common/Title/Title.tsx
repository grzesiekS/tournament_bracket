import React from 'react';
import clsx from 'clsx';

import styles from './Title.module.scss';

interface TitleInt {
  text: string,
  color: 'dark' | 'light',
}

export const Title: React.FC<TitleInt> = ({ text, color }) => (
  <h2 className={clsx(styles.title, styles[color])}>{text}</h2>
);