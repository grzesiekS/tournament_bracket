import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { getPlayers, removePlayerDb } from '../../../../redux/playersRedux';

import { ScoreDetails } from '../../ScoreDetails/ScoreDetails';
import { Button } from '../../../common/Button/Button';
import styles from './Player.module.scss';

export const Player: React.FC<{id:string}> = ({ id }) => {
  const dispatch = useDispatch();
  const player = useSelector(getPlayers).filter(player =>player._id === id)[0];

  return(
    <div className={styles.container}>
      {player !== undefined && 
        <>
          <p className={styles.name}>{player.name}</p>
          <ScoreDetails
            win={player.win}
            draw={player.draw}
            lose={player.lose}
          />
          <Button 
            title=""
            actionOnClick={() => dispatch(removePlayerDb(id))}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </>
      }
    </div>
  );
};