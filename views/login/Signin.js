import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../../src/Store';

export default function Signin({ navigation }) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function setAuthUser() {
    let user = {mail, password};
    dispatch((setUser(user)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signin</Text>

      <TextInput 
        style={styles.input}
        onChangeText={value => setMail(value)}
      >
        { mail }
      </TextInput>

      <TextInput 
        style={styles.input}
        onChangeText={value => setPassword(value)}
      >
        { password }
      </TextInput>

      <Button
        disabled={!mail || !password}
        title="signin"
        onPress={setAuthUser}
      />

      <Button
        title="go to signup"
        onPress={() => navigation.navigate('Signup')}
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
    gap: 12
  },
  title: {
    fontSize: 44,
  },
  input: {
    padding: 4,
    minWidth: 88,
    width: 'max-content',
    maxWidth: 260,
    height: 36,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderRadius: 4,
  }
});