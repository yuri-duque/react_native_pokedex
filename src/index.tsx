import React from 'react';
import {StatusBar} from './components/StatusBar';
import {AppStack} from './routes';

export const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#5E8D48" barStyle="light-content" />
      <AppStack />
    </>
  );
};

export default App;
