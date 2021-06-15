import React from 'react';

import { Bracket } from '../../features/Bracket/Bracket';
import { ScoreList } from '../../features/ScoreList/ScoreList';

import styles from './BracketScoreView.module.scss';

export const BracketScoreView: React.FC = () => (
  <div className={styles.container}>
    <div className={styles['col--xl']}>
      <Bracket />
    </div>
    <div className={styles['col--s']}>
      <ScoreList />
    </div>
  </div>
);