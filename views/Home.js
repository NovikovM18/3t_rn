import { StyleSheet, View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../src/Store';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  function logout() {
    dispatch(setUser(null));
  };


  return (
    <View style={styles.container}>
      <Text>{user ? 'USER: ' + user.name : 'no user'}</Text>
      
      <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />

      <Button
        title="Go to Users"
        onPress={() => navigation.navigate('Users')}
      />

      <Button
        title="out"
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // paddingTop: 36,
    flex: 1,
    flexDirection: 'column',
    gap: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
