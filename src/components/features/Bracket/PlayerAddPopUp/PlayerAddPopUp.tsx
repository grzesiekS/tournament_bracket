import React, { useState } from 'react';

import { FormComponents } from '../../../common/FormComponents/FormComponents';
import { Button } from '../../../common/Button/Button';

import styles from './PlayerAddPopUp.module.scss';

export const PlayerAddPopUp: React.FC<IPopUp> = ({ closePopUp }) => {
  const [playerName, setPlayerName] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FormComponents 
          ComponentType='input'
          labelText='Player Name'
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <div className={styles.buttonsBlock}>
          <Button 
            title='Add Player' 
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