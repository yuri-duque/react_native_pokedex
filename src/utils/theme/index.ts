type TypeColor = {
  main: string;
  light: string;
};

export type Theme = {
  colors: {
    text: string;
    background: string;
    success: string;
    error: string;
    pokemonTypeColor: {
      bug: TypeColor;
      dark: TypeColor;
      dragon: TypeColor;
      electric: TypeColor;
      fairy: TypeColor;
      fighting: TypeColor;
      fire: TypeColor;
      flying: TypeColor;
      ghost: TypeColor;
      grass: TypeColor;
      ground: TypeColor;
      ice: TypeColor;
      normal: TypeColor;
      poison: TypeColor;
      psychic: TypeColor;
      rock: TypeColor;
      steel: TypeColor;
      water: TypeColor;
    };
  };
}

export const DefaultTheme: Theme = {
  colors: {
    text: '#ffffff',
    background: '#000000',
    success: '#28a745',
    error: '#dc3545',
    pokemonTypeColor: {
      bug: {main: '#A6B91A', light: ''},
      dark: {main: '#705746', light: ''},
      dragon: {main: '#6F35FC', light: ''},
      electric: {main: '#F7D02C', light: ''},
      fairy: {main: '#D685AD', light: ''},
      fighting: {main: '#C22E28', light: ''},
      fire: {main: '#EE8130', light: ''},
      flying: {main: '#A98FF3', light: ''},
      ghost: {main: '#735797', light: ''},
      grass: {main: '#7AC74C', light: ''},
      ground: {main: '#E2BF65', light: ''},
      ice: {main: '#96D9D6', light: ''},
      normal: {main: '#A8A77A', light: ''},
      poison: {main: '#A33EA1', light: ''},
      psychic: {main: '#F95587', light: ''},
      rock: {main: '#B6A136', light: ''},
      steel: {main: '#B7B7CE', light: ''},
      water: {main: '#6390F0', light: ''},
    },
  },
};
