import React from 'react';
import { useSelector } from 'react-redux';

import { getTeams } from '../../../redux/teamsRedux';

import { Team } from '../Team/Team';

import styles from './Bracket.module.scss';

export const Bracket: React.FC = () => {
  const teams = useSelector(getTeams);
  console.log(teams);

  return (
    <div className={styles.container}>
      <h1>Bracket</h1>
      {teams.map(team => (
        <Team
          _id={team._id}
          draw={team.draw}
          lose={team.lose}
          win={team.win}
          name={team.name}
          players={team.players}
          key={team._id}
        />
      ))}
    </div>
  );
};