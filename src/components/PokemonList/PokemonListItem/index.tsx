import {useEffect, useState} from 'react';
import {Pokemon} from '../../../models/pokemon';
import {pokemonApi} from '../../../service/pokemonApi';
import {Container, Image, Text, TypeContainer, TypeText} from './styles';
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
      {pokemonDetails.types?.map((type, index) => {
        return (
          // <TypeContainer key={index} pokemon={pokemonDetails}>
            <TypeText>{type.name}</TypeText>
          // </TypeContainer>

        );
      })}
      {pokemonDetails.sprites?.front_default && (
        <Image
          source={{
            uri: `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`,
          }}
          width={100}
          height={100}
        />
      )}
    </Container>
  );
};
