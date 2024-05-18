import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from './components/StatusBar';
import {AppStack} from './routes';

export const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#5E8D48" barStyle="light-content" />
      <AppStack />
    </SafeAreaProvider>
  );
};

export default App;
