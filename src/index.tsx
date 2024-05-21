import React from 'react';
import {StatusBar} from './components/StatusBar';
import {AppStack} from './routes';
import ThemeProvider from './contexts/ThemeProvider';

export const App = () => {
  return (
    <ThemeProvider>
      <StatusBar />
      <AppStack />
    </ThemeProvider>
  );
};

export default App;
