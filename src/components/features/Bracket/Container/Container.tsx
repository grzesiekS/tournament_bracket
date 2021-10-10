import React from 'react';

import { Team } from '../../Team/Team';
import styles from './Container.module.scss';

export const Container: React.FC<TeamState> = ({teams}) => {

  return (
    <div className={styles.container}>
      {teams.map(team => (
        <Team
          key={team._id}
          {...team}
        />
      ))}
    </div>
  );
};