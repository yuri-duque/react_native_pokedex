import styled from 'styled-components/native';
import {Pokemon} from '../../../models/pokemon';

type ContainerProps = {
  pokemon: Pokemon;
};

type TextTypeProps = {
  pokemon: Pokemon;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({pokemon, theme}) => {
    const pokemonType = pokemon.types[0]?.name;
    return pokemonType
      ? theme.colors.pokemonTypeColors[pokemonType].main
      : theme.colors.white;
  }};
  border-radius: 12px;
  flex: 1;
  position: relative;
  box-shadow: 6px 6px 4px black;
  elevation: 4;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;
  margin: 8px;
  margin-top: 16px;
  letter-spacing: 0.8px;
`;

export const TypeContainer = styled.View<TextTypeProps>`
  flex: none;
  background-color: ${({pokemon, theme}) => {
    const pokemonType = pokemon.types[0]?.name;
    return pokemonType
      ? theme.colors.pokemonTypeColors[pokemonType].light
      : theme.colors.white;
  }};
  padding: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 4px;
  border-radius: 8px;
`;

export const TypeText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 65%;
  height: 65%;
  position: absolute;
  bottom: 8px;
  right: 0px;
`;
