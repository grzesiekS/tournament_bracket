import React from 'react';
import { useSelector } from 'react-redux';
import { PlayerInt } from '../../../../common/interface';

import styles from './Player.module.scss';

export const Player: React.FC<{id:string}> = ({ id }) => {

  const player = useSelector((state: { players: PlayerInt[]; }) => state.players
    .filter(player =>player._id === id)[0]);

  return(
    <div className={styles.container}>
      <p className={styles.name}>{player.name}</p>
      <div className={styles.flexbox}>
        <p>{`w:${player.win}`}</p>
        <p>{`d:${player.draw}`}</p>
        <p>{`l:${player.lose}`}</p>
      </div>
    </div>
  );
};