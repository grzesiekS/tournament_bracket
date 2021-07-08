import React from 'react';

import { TeamInt } from '../../../common/interface';

import { Title } from '../../common/Title/Title';
import { Player } from './Player/Player';

import styles from './Team.module.scss';

export const Team: React.FC<TeamInt> = ({ name, win, draw, lose, players }) => (
  <div className={styles.container}>
    <Title text={name} color='dark'/>
    <div className={styles.flexbox}>
      <p>{`w:${win}`}</p>
      <p>{`d:${draw}`}</p>
      <p>{`l:${lose}`}</p>
    </div>
    <div className={styles.playerList}>
      {players.map(playerId => (
        <Player key={playerId} id={playerId} />
      ))}
    </div>
  </div>
);