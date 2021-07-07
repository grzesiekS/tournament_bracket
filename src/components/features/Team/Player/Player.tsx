import React from 'react';

import styles from './Player.module.scss';

export const Player: React.FC<{id:string}> = ({ id }) => {
  return(
    <div className={styles.container}>
      <p>{id}</p>
    </div>
  );
};