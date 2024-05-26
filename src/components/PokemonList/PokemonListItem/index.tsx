import {useEffect, useState} from 'react';
import {Pokemon} from '../../../models/pokemon';
import {pokemonApi} from '../../../service/pokemonApi';
import {Container, Image, Text} from './styles';
import {PokemonListItemProps} from './types';

export const PokemonListItem = ({pokemon}: PokemonListItemProps) => {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon>(pokemon);

  const getPokemonDetails = async () => {
    const pokemonDetails = await pokemonApi.getByName(pokemon.name);
    setPokemonDetails(pokemonDetails);
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <Container pokemon={pokemonDetails}>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        {pokemonDetails.name}
      </Text>
      {pokemonDetails.sprites?.front_default && (
        <Image
          source={{uri: pokemonDetails.sprites.front_default}}
          width={100}
          height={100}
        />
      )}
    </Container>
  );
};
