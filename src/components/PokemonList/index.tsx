import {View, VirtualizedList} from 'react-native';
import {Pokemon} from '../../models/pokemon';
import {PokemonListItem} from './PokemonListItem';
import {Col, Container, Row, Separator} from './styles';
import {PokemonListProps} from './types';

export const PokemonList = ({pokemons}: PokemonListProps) => {
  const cols = 2;
  if (!pokemons) <></>;

  const renderItem = ({item, index}: {item: Pokemon[]; index: number}) => {
    if (!item) return <View />;

    return (
      <Row key={index} cols={cols}>
        {item.map((pokemon, i) => (
          <Col key={i}>
            <PokemonListItem pokemon={pokemon} />
            {i < item.length - 1 && <Separator />}
          </Col>
        ))}
      </Row>
    );
  };

  const getItem = (data: Pokemon[], index: number) => {
    const items = [];
    for (let i = 0; i < cols; i++) {
      const item = data[index * cols + i];
      item && items.push(item);
    }
    return items;
  };

  const getItemCount = () => {
    if (pokemons.length % cols === 0) return pokemons.length / cols;
    return Math.floor(pokemons.length / cols) + 1;
  };

  return (
    <Container>
      <VirtualizedList
        data={pokemons}
        getItem={getItem}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <Separator />}
        getItemCount={getItemCount}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
