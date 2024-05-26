export const DefaultTheme: Theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    success: '#28a745',
    error: '#dc3545',
    pokemonColor: '#ffffff',
    pokemonTypeColor: {
      fire: {main: '#fb6c6c', light: '#f88c8b', dark: '#c55656'},
      grass: {main: '#48d0b0', light: '#5ddfc6', dark: '#3aa88b'},
      water: {main: '#75bcfc', light: '#8fd1fe', dark: '#5a95c3'},
      electric: {main: '#ffd86f', light: '#ffe580', dark: '#d1ab58'},
      bug: {main: '#A6B91A', light: '#C0D74E', dark: '#879014'},
      dark: {main: '#705746', light: '#8C7261', dark: '#5C4535'},
      dragon: {main: '#6F35FC', light: '#8A5FFD', dark: '#592BC7'},
      fairy: {main: '#D685AD', light: '#E7A1C0', dark: '#AD6A8C'},
      fighting: {main: '#C22E28', light: '#D85250', dark: '#9E241F'},
      flying: {main: '#A98FF3', light: '#C0A7F8', dark: '#8671C3'},
      ghost: {main: '#735797', light: '#8E70AD', dark: '#5B466D'},
      ground: {main: '#E2BF65', light: '#EED987', dark: '#B89A4F'},
      ice: {main: '#96D9D6', light: '#B1E6E4', dark: '#75AAA7'},
      normal: {main: '#A8A77A', light: '#C0C08C', dark: '#87875E'},
      poison: {main: '#A33EA1', light: '#B95FB6', dark: '#812F7F'},
      psychic: {main: '#F95587', light: '#FA789F', dark: '#C0446C'},
      rock: {main: '#B6A136', light: '#D0BC5B', dark: '#8F812A'},
      steel: {main: '#B7B7CE', light: '#CDCCD9', dark: '#8F8F9E'},
    },
  },
  sizes: {
    dimenions: {
      width: 0,
      height: 0,
    },
  },
};

type TypeColor = {
  main: string;
  light: string;
  dark: string;
};

export type Theme = {
  colors: {
    black: string;
    white: string;
    success: string;
    error: string;
    pokemonColor: string;
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
  sizes: {
    dimenions: {
      width: number;
      height: number;
    };
  };
};
