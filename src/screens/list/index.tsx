import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from '../../components/Input';
import {PokemonList} from '../../components/PokemonList';
import {usePokemonContext} from '../../contexts/Pokemon';
import {Pokemon} from '../../models/pokemon';
import {pokemonApi} from '../../service/pokemonApi';
import {MainView} from './styles';
import { Image, Text } from 'react-native';

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
    const filteredPokemons = pokemons?.filter(pokemon => {
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
        <Input value={search} onChangeText={onChangeText} />
        <Text style={{backgroundColor: "red", width: "auto"}}>123</Text>
        <PokemonList pokemons={filteredPokemons} />
      </MainView>
    </SafeAreaView>
  );
};
