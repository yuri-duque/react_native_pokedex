import {Pokemon} from '../../models/pokemon';

export type PokemonProviderProps = {
  children: React.ReactNode;
};

export type PokemonContextData = {
  pokemon?: Pokemon;
  setPokemonDetails: (pokemon?: any) => void;
  pokemons?: Pokemon[];
  setPokemons: (pokemons: any[]) => void;
  updatePokemonOnList: (pokemon: any) => void;
};
