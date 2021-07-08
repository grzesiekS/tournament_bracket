import React from 'react';
import { ScoreDetailsInt } from '../../../common/interface';

import styles from './ScoreDetails.module.scss';

export const ScoreDetails: React.FC<ScoreDetailsInt> = ({ win, draw, lose }) => (
  <div className={styles.flexbox}>
    <p>{`w:${win}`}</p>
    <p>{`d:${draw}`}</p>
    <p>{`l:${lose}`}</p>
  </div>
);