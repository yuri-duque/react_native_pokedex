import React, { useEffect, useState } from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { pokemonById } from '../../service/pokemonApi';
import { Pokemon } from '../../models/pokemon';
import Icon from 'react-native-vector-icons/AntDesign';

export const DetailsScreen = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    const pokemon = await pokemonById(1);
    setPokemon(pokemon);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <SafeAreaView>
      <Icon name="arrowleft" size={30} color="#900" />
      <Text>Pokemon:</Text>
      {pokemon && <Text>{pokemon.name}</Text>}
    </SafeAreaView>
  );
};
