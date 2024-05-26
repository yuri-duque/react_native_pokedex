import {Pokemon} from '../../../models/pokemon';
import {pokemonApi} from '../config';

export const pokemonGetAll = async () => {
  const response = await pokemonApi.get(`/pokemon?limit=100000&offset=0`);
  const data = response.data;

  const pokemons: Pokemon[] = data.results.map((pokemon: any) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
    };
  });
  return pokemons;
};

export const pokemonById = async (id: number) => {
  const response = await pokemonApi.get(`/pokemon/${id}`);
  const data = response.data;

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    sprites: {
      front_default: data.sprites.front_default,
      front_shiny: data.sprites.front_shiny,
    },
  };

  return pokemon;
};
