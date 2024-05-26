import { TextInput } from 'react-native';
import {Container} from './styles';
import {InputProps} from './types';

export const Input = ({value, onChangeText}: InputProps) => {
  return (
    <Container>
      <TextInput value={value} onChangeText={onChangeText} />
    </Container>
  );
};
