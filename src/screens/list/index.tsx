import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {usePokemonContext} from '../../contexts/Pokemon';
import {MainView} from './styles';
import { PokemonList } from '../../components/PokemonList';
import { TextInput } from 'react-native';
import { Pokemon } from '../../models/pokemon';
import { pokemonApi } from '../../service/pokemonApi';

export const ListScreen = () => {
  const {pokemons, setPokemons} = usePokemonContext();
  const [search, setSearch] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  const getPokemons = async () => {
    const pokemons = await pokemonApi.getAll();
    setPokemons(pokemons);
    setFilteredPokemons(pokemons);
  };

  const onChangeText = (text: string) => {
    setSearch(text);
    const filteredPokemons = pokemons?.filter((pokemon) => {
      return pokemon.name.includes(text.toLowerCase());
    });
    setFilteredPokemons(filteredPokemons ?? []);
  };

  useEffect(() => {
    getPokemons();
  }, []);
  
  return (
    <SafeAreaView>
      <MainView>
        {/* <TextInput value={search} onChangeText={onChangeText}/> */}
        <PokemonList pokemons={filteredPokemons} />
      </MainView>
    </SafeAreaView>
  );
};
