import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Users from '../views/Users';
import Tasks from '../views/Tasks';
import Signin from '../views/login/Signin';
import { useSelector } from 'react-redux';
import Signup from '../views/login/Signup';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const auth = useSelector((state) => state.auth.user);
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {auth
            ? (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Tasks" component={Tasks} />
                <Stack.Screen name="Users" component={Users} />
              </>
              ) 
            : (
              <>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
              )
          }
        </Stack.Navigator>
      </NavigationContainer>
      
  )
}
