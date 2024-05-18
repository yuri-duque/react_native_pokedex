import {POKEDEX_API_URL} from '@env';
import React from 'react';
import {StatusBar} from './components/StatusBar';
import {AppStack} from './routes';

export const App = () => {
  console.log('api', POKEDEX_API_URL);

  return (
    <>
      <StatusBar backgroundColor="#5E8D48" barStyle="light-content" />
      <AppStack />
    </>
  );
};

export default App;
