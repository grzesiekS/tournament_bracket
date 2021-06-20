import React from 'react';
import { useSelector } from 'react-redux';

import { getTeams } from '../../../redux/teamsRedux';

import { Team } from '../Team/Team';

import styles from './Bracket.module.scss';

export const Bracket: React.FC = () => {
  const teams = useSelector(getTeams);

  return (
    <div className={styles.container}>
      <h1>Bracket</h1>
      {teams.map(team => (
        <Team
          key={team._id}
          {...team}
        />
      ))}
    </div>
  );
};