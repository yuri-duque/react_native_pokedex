import React, {createContext, useState} from 'react';
import {useTheme} from '../Theme';
import {PokemonContextData, PokemonProviderProps} from './type';

export const PokemonContext = createContext<PokemonContextData | undefined>(
  undefined,
);

export const PokemonProvider = ({children}: PokemonProviderProps) => {
  const [pokemon, setPokemon] = useState<any | undefined>();
  const [pokemons, setPokemons] = useState<any[]>([]);

  const theme = useTheme();

  const setPokemonDetails = (pokemon?: any) => {
    setPokemon(pokemon);
    theme.handlePokemonColor(pokemon);
  };

  return (
    <PokemonContext.Provider
      value={{pokemon, setPokemonDetails, pokemons, setPokemons}}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = React.useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
};
