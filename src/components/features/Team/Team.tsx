import React, { useState } from 'react';

import { TeamInt, ViewPlayerStatusInt } from '../../../common/interface';

import { Title } from '../../common/Title/Title';
import { Player } from './Player/Player';
import { ScoreDetails } from '../ScoreDetails/ScoreDetails';
import { Button } from '../../common/Button/Button';

import styles from './Team.module.scss';

export const Team: React.FC<TeamInt & ViewPlayerStatusInt> = (
  { name,
    win, 
    draw, 
    lose, 
    players, 
    viewPlayerStatus = false,
  }) => {

  const [showPlayers, setShowPlayers] = useState(false);

  return (
    <div className={styles.container}>
      <Title text={name} color='dark'/>
      <ScoreDetails 
        win={win}
        draw={draw}
        lose={lose}
      />
      {viewPlayerStatus && 
        <Button 
          title={'Show Players'}
          actionOnClick={() => setShowPlayers(!showPlayers)} 
        />
      }
      {showPlayers && 
        <div className={styles.playerList}>
          {players.map(playerId => (
            <Player key={playerId} id={playerId} />
          ))}
        </div>  
      }
    </div>
  );
};