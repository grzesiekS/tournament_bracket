import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTeams, fetchAllTeams } from '../../../redux/teamsRedux';

import { Team } from '../Team/Team';
import { Button } from '../../common/Button/Button';
import { ModalBox } from '../../common/ModalBox/ModalBox';
import { TeamAddPopUp } from './TeamAddPopUp/TeamAddPopUp';
import { PlayerAddPopUp } from './PlayerAddPopUp/PlayerAddPopUp';

import styles from './Bracket.module.scss';

export const Bracket: React.FC = () => {
  const teams: ITeam[] = useSelector(getTeams);
  const dispatch = useDispatch();

  const [teamAddPopUpVisibility, setTeamAddPopUpVisibility] = useState(false);
  const [playerAddPopUpVisibility, setPlayerAddPopUpVisibility] = useState(false);

  useEffect(() => {
    dispatch(fetchAllTeams());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <ModalBox>
      {teamAddPopUpVisibility 
        && 
        <TeamAddPopUp 
          closePopUp={(value) => setTeamAddPopUpVisibility(value)}
        />
      }
      {playerAddPopUpVisibility
        &&
        <PlayerAddPopUp 
          closePopUp={(value) => setPlayerAddPopUpVisibility(value)}
          teams={teams}
        />
      }
      <div className={styles.container}>
        <h1>Bracket</h1>
        <Button 
          title='Add team'
          actionOnClick={() => setTeamAddPopUpVisibility(true)} 
        />
        <Button 
          title='Add Player'
          actionOnClick={() => setPlayerAddPopUpVisibility(true)}
        />
        {teams.map(team => (
          <Team
            key={team._id}
            {...team}
          />
        ))}
      </div>
    </ModalBox>
  );
};