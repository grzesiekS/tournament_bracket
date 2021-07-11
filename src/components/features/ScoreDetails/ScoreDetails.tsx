import React from 'react';

import styles from './ScoreDetails.module.scss';

interface ScoreDetailsInt {
  win: number,
  draw: number,
  lose: number,
}

export const ScoreDetails: React.FC<ScoreDetailsInt> = ({ win, draw, lose }) => (
  <div className={styles.flexbox}>
    <p>{`w:${win}`}</p>
    <p>{`d:${draw}`}</p>
    <p>{`l:${lose}`}</p>
  </div>
);