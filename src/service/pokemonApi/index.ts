import {Pokemon} from '../../models/pokemon';
import {pokemonApiConfig} from './config';

const getAll = async () => {
  const response = await pokemonApiConfig.get(`/pokemon?limit=100000&offset=0`);
  const data = response.data;

  const pokemons: Pokemon[] = data.results.map((data: any) => {
    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      sprites: {
        front_default: '',
        front_shiny: '',
      },
      types: [],
    };
    return pokemon;
  });
  return pokemons;
};

const getByName = async (name: string) => {
  const response = await pokemonApiConfig.get(`/pokemon/${name}`);
  const data = response.data;

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    sprites: {
      front_default: data.sprites.front_default,
      front_shiny: data.sprites.front_shiny,
    },
    types: data.types.map((type: any) => {
      return {
        name: type.type.name,
      };
    }),
  };

  return pokemon;
};

export const pokemonApi = {
  getAll,
  getByName,
};
