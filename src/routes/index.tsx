import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '../screens/details';
import {ListScreen} from '../screens/list';
import { Header } from '../components/Header';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} options={{header: () => <Header title='Pokedex' />}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{header: () => <Header isBack />}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
