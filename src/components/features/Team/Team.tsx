import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Title } from '../../common/Title/Title';
import { Player } from './Player/Player';
import { ScoreDetails } from '../ScoreDetails/ScoreDetails';
import { Button } from '../../common/Button/Button';

import styles from './Team.module.scss';

export const Team: React.FC<ITeamComponent> = (
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
      {viewPlayerStatus 
        ? 
        <Button 
          title={buttonTitle}
          actionOnClick={() => setShowPlayers(!showPlayers)} 
        />
        :
        <Button title="">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
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