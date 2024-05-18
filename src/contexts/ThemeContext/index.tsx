import {createContext, useContext} from 'react';
import {ThemeContextType} from './types';

const defaultThemeContext: ThemeContextType = {};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

const ThemeProvider = ({children}: any) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const {} = useContext(ThemeContext);
};

export {ThemeProvider, ThemeContext, useTheme};
