import React from 'react';
import { useSelector } from 'react-redux';

import { getTeams } from '../../../redux/teamsRedux';

import { Team } from '../Team/Team';

import styles from './ScoreList.module.scss';

interface TeamInt {
  _id: string,
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
}

export const ScoreList: React.FC = () => {
  const teams: TeamInt[] = useSelector(getTeams);

  return (
    <div className={styles.container}>
      <h1>Score List</h1>
      {teams.map(team => (
        <Team
          key={team._id}
          viewPlayerStatus={true}
          {...team}
        />
      ))}
    </div>
  );
};