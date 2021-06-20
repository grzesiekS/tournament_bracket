import React from 'react';

import { TeamInt } from '../../../common/interface';

import styles from './Team.module.scss';

export const Team: React.FC<TeamInt> = ({ name, win, draw, lose }) => (
  <div className={styles.container}>
    <h1>{name}</h1>
    <div className={styles.flexbox}>
      <p>{win}</p>
      <p>{draw}</p>
      <p>{lose}</p>
    </div>
  </div>
);