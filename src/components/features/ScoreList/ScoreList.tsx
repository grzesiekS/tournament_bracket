import React from 'react';
import { useSelector } from 'react-redux';

import { getTeams } from '../../../redux/teamsRedux';

import { Team } from '../Team/Team';

import styles from './ScoreList.module.scss';

export const ScoreList: React.FC = () => {
  const teams = useSelector(getTeams);

  return (
    <div className={styles.container}>
      <h1>Score List</h1>
      {teams.map(team => (
        <Team
          key={team._id}
          {...team}
        />
      ))}
    </div>
  );
};