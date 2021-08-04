import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewPlayer } from '../../../../redux/playersRedux';
import { addNewTeamPlayer } from '../../../../redux/teamsRedux';

import { FormComponents } from '../../../common/FormComponents/FormComponents';
import { Button } from '../../../common/Button/Button';

import styles from './PlayerAddPopUp.module.scss';

export const PlayerAddPopUp: React.FC<IPopUp> = ({ closePopUp, teams = [] }) => {
  const dispatch = useDispatch();

  const [playerName, setPlayerName] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectElement, setSelectElement ] = useState<selectElement[]>([]);

  useEffect(() => {
    const newSelectElement:selectElement[] = [];

    teams.forEach(team => {
      newSelectElement.push(
        {
          optionText: team.name,
          optionValue: team._id,
        }
      );
    });
    
    setSelectedTeam(newSelectElement[0].optionValue);
    setSelectElement(newSelectElement);
  },[teams]);

  const createNewPlayer = () => {
    if(
      playerName !== '' && selectedTeam !== '') {
      dispatch(addNewPlayer(playerName));
      dispatch(addNewTeamPlayer(selectedTeam, '1234'));
      closePopUp(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FormComponents 
          ComponentType='input'
          labelText='Player Name'
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <FormComponents 
          ComponentType='select'
          labelText='Teams'
          selectOptions={selectElement}
          onChange={(e) => setSelectedTeam(e.target.value)}
          value={selectedTeam}
        />
        <div className={styles.buttonsBlock}>
          <Button 
            title='Add Player'
            actionOnClick={() => createNewPlayer()} 
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