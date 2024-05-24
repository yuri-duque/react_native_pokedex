import React from 'react';
import {StatusBar} from './components/StatusBar';
import {PokemonProvider} from './contexts/Pokemon';
import {ThemeProvider} from './contexts/Theme';
import {AppStack} from './routes';

export const App = () => {
  return (
    <ThemeProvider>
      <StatusBar />
      <PokemonProvider>
        <AppStack />
      </PokemonProvider>
    </ThemeProvider>
  );
};

export default App;
