import React from 'react';

import { FormComponents } from '../../../common/FormComponents/FormComponents';
import { Button } from '../../../common/Button/Button';

import styles from './TeamAddPopUp.module.scss';

interface TeamAddPopUpInt {
  addTeamAction?: () => void;
  closePopUp?: () => void;
}

export const TeamAddPopUp: React.FC<TeamAddPopUpInt> = ({ addTeamAction, closePopUp }) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <FormComponents 
          ComponentType='input'
          labelText='Team Name'
        />
        <div className={styles.buttonsBlock}>
          <Button 
            title='Add Team'
            actionOnClick={() => addTeamAction} 
          />
          <Button 
            title='Close'
            actionOnClick={() => closePopUp} 
          />
        </div>
      </form>
    </div>
  );
};