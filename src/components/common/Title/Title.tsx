import React from 'react';
import clsx from 'clsx';

import { TitleInt } from '../../../common/interface';

import styles from './Title.module.scss';

export const Title: React.FC<TitleInt> = ({ text, color }) => (
  <h2 className={clsx(styles.title, styles[color])}>{text}</h2>
);