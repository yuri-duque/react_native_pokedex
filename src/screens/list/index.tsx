import React from 'react';
import {Button, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {usePokemonContext} from '../../contexts/Pokemon';
import {MainView} from './styles';

export const ListScreen = () => {
  const {pokemon, setPokemonDetails} = usePokemonContext();

  const onPress = () => {
    if (pokemon) {
      setPokemonDetails(undefined);
    } else {
      setPokemonDetails({name: 'Pikachu'});
    }
  };

  return (
    <SafeAreaView>
      <MainView>
          <Button title="Set Pokemon" onPress={onPress} />
      </MainView>
    </SafeAreaView>
  );
};
