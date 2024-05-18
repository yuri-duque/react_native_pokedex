import {SafeAreaView} from 'react-native-safe-area-context';
import {ContainerProps} from './types';

export const Container = ({children}: ContainerProps) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
