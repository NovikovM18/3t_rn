import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Users from '../views/Users';
import Tasks from '../views/Tasks';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
