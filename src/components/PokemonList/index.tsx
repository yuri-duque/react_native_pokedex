import {View, VirtualizedList} from 'react-native';
import {Pokemon} from '../../models/pokemon';
import {PokemonListItem} from './PokemonListItem';
import {Col, Row, Separator} from './styles';
import {PokemonListProps} from './types';

export const PokemonList = ({pokemons}: PokemonListProps) => {
  const cols = 2;
  if (!pokemons) <></>;

  const renderItem = ({item, index}: {item: Pokemon[]; index: number}) => {
    return (
      <Row key={index} cols={cols}>
        {item.map((pokemon, i) => (
          <Col key={i}>
            <PokemonListItem pokemon={pokemon} index={index}/>
            {i < item.length -1 && <Separator />}
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <VirtualizedList
      data={pokemons}
      getItem={(data, index) => {
        const items = [];

        for (let i = 0; i < cols; i++) {
          const item = data[index * cols + i];
          item && items.push(item);
        }

        return items;
      }}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <Separator />}
      getItemCount={() => pokemons.length / cols}
      showsVerticalScrollIndicator={false}
      initialNumToRender={2}
    />
  );
};
