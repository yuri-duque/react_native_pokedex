import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListScreen} from '../screens/list';
import {DetailsScreen} from '../screens/details';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
