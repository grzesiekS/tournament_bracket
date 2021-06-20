import React, { useState } from 'react';

import styles from './BackgroundAnimation.module.scss';

const bubbleCreator = (bubbleQty: number) => {
  const resultArray = [];
  for(let i = 0; i < bubbleQty; i++) {
    resultArray.push(i);
  }

  return resultArray;
};

export const BackgroundAnimation: React.FC = () => {
  const [bubblesCount] = useState(50);

  return (
    <div className={styles.bubbles}>
      {bubbleCreator(bubblesCount).map(bubble => (
        <div key={bubble} className={styles.bubble}></div>
      ))}
    </div>
  );
};