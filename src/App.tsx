import React from 'react';

import { BracketScoreView } from './components/views/BracketScoreView/BracketScoreView';
import { BackgroundAnimation } from './components/common/BackgroundAnimation/BackgroundAnimation';

import './styles/global.scss';

export const App: React.FC = () => (
  <>
    <BracketScoreView />
    <BackgroundAnimation />
  </>
);
