import React from 'react';
import { useSelector } from 'react-redux';

import { getPlayers } from '../../../../redux/playersRedux';

import { ScoreDetails } from '../../ScoreDetails/ScoreDetails';
import styles from './Player.module.scss';

export const Player: React.FC<{id:string}> = ({ id }) => {

  const player = useSelector(getPlayers).filter(player =>player._id === id)[0];

  return(
    <div className={styles.container}>
      <p className={styles.name}>{player.name}</p>
      <ScoreDetails
        win={player.win}
        draw={player.draw}
        lose={player.lose}
      />
    </div>
  );
};