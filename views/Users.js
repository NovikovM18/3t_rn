import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { supabase } from '../src/Supabase';

export default function Users({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  
    return () => {}
  }, []);
  
  async function getUsers() {
    const { data } = await supabase.from("users").select();
    if (data) {
      setUsers(data);
    };
  };

  return (
    <View style={styles.container}>
      <Text>users</Text>

      {users.length > 0 && 
        <FlatList
          style={styles.list}
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <View style={styles.list_item}>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.role}</Text>
              </View>
              <Button
                title="info"
                onPress={() => console.log(item)}
              />
            </View> 
          }
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    // paddingTop: 36,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  },
  list_item: {
    marginTop: 4,
    padding: 12,
    width: '100%',
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: 'lightblue',
  }
})
