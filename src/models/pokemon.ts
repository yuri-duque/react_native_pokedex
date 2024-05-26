type PokemonType = {
  name:
    | 'fire'
    | 'grass'
    | 'water'
    | 'electric'
    | 'bug'
    | 'dark'
    | 'dragon'
    | 'fairy'
    | 'fighting'
    | 'flying'
    | 'ghost'
    | 'ground'
    | 'ice'
    | 'normal'
    | 'poison'
    | 'psychic'
    | 'rock'
    | 'steel';
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  types: PokemonType[];
};
