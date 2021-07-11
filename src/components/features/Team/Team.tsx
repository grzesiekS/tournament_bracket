import React, { useState } from 'react';

import { Title } from '../../common/Title/Title';
import { Player } from './Player/Player';
import { ScoreDetails } from '../ScoreDetails/ScoreDetails';
import { Button } from '../../common/Button/Button';

import styles from './Team.module.scss';

interface TeamInt {
  _id: string,
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
  viewPlayerStatus?: boolean
}

export const Team: React.FC<TeamInt> = (
  { name,
    win, 
    draw, 
    lose, 
    players, 
    viewPlayerStatus = false,
  }) => {

  const [showPlayers, setShowPlayers] = useState(false);
  const buttonTitle = showPlayers ? 'Hide Players' : 'Show Players';

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
          title={buttonTitle}
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