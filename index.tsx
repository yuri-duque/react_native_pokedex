import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import messageSound from './assets/sounds/message.mp3';

export const App = () => {
  const onPress = () => {
    console.log('play');
  };

  const sound = new Audio(sound);

  return (
    <SafeAreaView>
      <Button title="play" onPress={onPress} />
    </SafeAreaView>
  );
};
