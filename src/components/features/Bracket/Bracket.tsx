import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getTeams } from '../../../redux/teamsRedux';

import { Team } from '../Team/Team';
import { Button } from '../../common/Button/Button';
import { ModalBox } from '../../common/ModalBox/ModalBox';
import { TeamAddPopUp } from './TeamAddPopUp/TeamAddPopUp';

import styles from './Bracket.module.scss';

export const Bracket: React.FC = () => {
  const teams = useSelector(getTeams);

  const [teamAddPopUpVisibility, setTeamAddPopUpVisibility] = useState(false);

  return (
    <ModalBox>
      {teamAddPopUpVisibility 
        && 
        <TeamAddPopUp 
          closePopUp={() => setTeamAddPopUpVisibility(false)}
        />
      }
      <div className={styles.container}>
        <h1>Bracket</h1>
        <Button 
          title='Add team'
          actionOnClick={() => setTeamAddPopUpVisibility(true)} 
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