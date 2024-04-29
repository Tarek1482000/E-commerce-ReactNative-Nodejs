import React from 'react';
import Setup from './src/navigation/Setup';
import {SCREEN} from './src/constants';

const App = () => {
  return <Setup startScreen={SCREEN.Home} />;
};

export default App;
