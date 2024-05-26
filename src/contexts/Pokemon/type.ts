export type PokemonProviderProps = {
  children: React.ReactNode;
};

export type PokemonContextData = {
  pokemon?: any;
  setPokemonDetails: (pokemon?: any) => void;
  pokemons?: any[];
  setPokemons: (pokemons: any[]) => void;
  updatePokemonOnList: (pokemon: any) => void;
};
