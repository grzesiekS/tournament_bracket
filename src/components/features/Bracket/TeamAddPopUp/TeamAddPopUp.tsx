import React, { useState } from 'react';

import { addNewTeamDb } from '../../../../redux/teamsRedux';

import { FormComponents } from '../../../common/FormComponents/FormComponents';
import { Button } from '../../../common/Button/Button';

import styles from './TeamAddPopUp.module.scss';
import { useDispatch } from 'react-redux';

export const TeamAddPopUp: React.FC<IPopUp> = ({ closePopUp }) => {
  const dispatch = useDispatch();
  const [teamName, setTeamName] = useState('');

  const createNewTeam = () => {
    if(teamName != '') {
      closePopUp(false);
      dispatch(addNewTeamDb(teamName));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FormComponents 
          ComponentType='input'
          labelText='Team Name'
          value={teamName}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTeamName(e.target.value)}
        />
        <div className={styles.buttonsBlock}>
          <Button 
            title='Add Team'
            actionOnClick={() => createNewTeam()} 
          />
          <Button 
            title='Close'
            actionOnClick={() => closePopUp(false)} 
          />
        </div>
      </div>
    </div>
  );
};