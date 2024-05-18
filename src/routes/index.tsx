import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '../screens/details';
import {ListScreen} from '../screens/list';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Details"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
