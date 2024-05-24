import React, {createContext, useState} from 'react';
import {ThemeProvider as RNThemeProvider} from 'styled-components/native';
import {DefaultTheme, Theme} from '../../utils/theme';
import {ThemeContextData, ThemeProviderProps} from './types';

export const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(DefaultTheme);

  const handlePokemonColor = (pokemon: string) => {
    const pokemonColor = pokemon ? theme.colors.pokemonTypeColor.grass.main : theme.colors.white;
    setTheme({...theme, colors: {...theme.colors, pokemonColor}});
  };

  return (
    <ThemeContext.Provider value={{handlePokemonColor}}>
      <RNThemeProvider theme={theme}>
        {children}
      </RNThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
