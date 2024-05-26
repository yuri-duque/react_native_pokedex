import {Text} from 'react-native';
import {Container} from './styles';
import {PokemonListItemProps} from './types';

export const PokemonListItem = ({pokemon, index}: PokemonListItemProps) => {
  return (
    <Container>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        {pokemon.name}
      </Text>
    </Container>
  );
};
