import { Pokemon } from "../../../../models/pokemon";
import { pokemonApi } from "../../config";

export const pokemonById = async (id: number) => {
    try {
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
    } catch (error) {
        console.error(error);
        return undefined;
    }
};