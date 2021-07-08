import React from 'react';

import { TeamInt } from '../../../common/interface';

import { Title } from '../../common/Title/Title';
import { Player } from './Player/Player';
import { ScoreDetails } from '../ScoreDetails/ScoreDetails';

import styles from './Team.module.scss';

export const Team: React.FC<TeamInt> = ({ name, win, draw, lose, players }) => (
  <div className={styles.container}>
    <Title text={name} color='dark'/>
    <ScoreDetails 
      win={win}
      draw={draw}
      lose={lose}
    />
    <div className={styles.playerList}>
      {players.map(playerId => (
        <Player key={playerId} id={playerId} />
      ))}
    </div>
  </div>
);