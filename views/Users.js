import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { supabase } from '../src/Supabase';

export default function Users({ navigation }) {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const { data } = await supabase.from("users").select();
    console.log(data);
    if (data) {
      setUsers(data);
    };
  };

  return (
    <View style={styles.container}>
      <Text>users</Text>
      <Button
        title="Get users"
        onPress={() => getUsers()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // paddingTop: 36,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
