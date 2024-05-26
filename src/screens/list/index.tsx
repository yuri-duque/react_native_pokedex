import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {usePokemonContext} from '../../contexts/Pokemon';
import {MainView} from './styles';
import { pokemonGetAll } from '../../service/pokemonApi';
import { PokemonList } from '../../components/PokemonList';

export const ListScreen = () => {
  const {pokemons, setPokemons} = usePokemonContext();

  const getPokemons = async () => {
    const pokemons = await pokemonGetAll();
    setPokemons(pokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  
  return (
    <SafeAreaView>
      <MainView>
        <PokemonList pokemons={pokemons} />
      </MainView>
    </SafeAreaView>
  );
};
