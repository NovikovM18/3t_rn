import { StyleSheet, View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../src/Store';
import { supabase } from '../src/Supabase';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(setUser(null));
    } else {
      alert(error.message);
    };
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
