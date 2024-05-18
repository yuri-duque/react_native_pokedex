import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListScreen} from '../../screens/list';
import {DetailsScreen} from '../../screens/details';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
