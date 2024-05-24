import {useEffect, useState} from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

export const StatusBar = () => {
  const [barStyle, setBarStyle] = useState<'light-content' | 'dark-content'>(
    'light-content',
  );

  const theme = useTheme();

  const updateBarStyle = () => {
    const pokemonColor = theme.colors.pokemonColor;
    
    if (pokemonColor === theme.colors.white) {
      setBarStyle('dark-content');
    } else {
      setBarStyle('light-content');
    }
  };

  useEffect(() => {
    updateBarStyle();
  }, [theme.colors.pokemonColor]);

  return (
    <RNStatusBar
      backgroundColor={theme.colors.pokemonColor}
      barStyle={barStyle}
      animated
    />
  );
};
