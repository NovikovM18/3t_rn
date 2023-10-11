import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../../src/Store';
import { supabase } from '../../src/Supabase';

export default function Signin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  async function setAuthUser() {
    // setLoading(true);
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (user) {
      console.log(user);
      dispatch((setUser(user)));
    }
    if (!error && !user) {
      alert("Check your email for the login link!");
    }
    if (error) {
      console.log(error);
      alert(error);
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signin</Text>

      <TextInput 
        style={styles.input}
        onChangeText={value => setEmail(value)}
      >
        { email }
      </TextInput>

      <TextInput 
        style={styles.input}
        onChangeText={value => setPassword(value)}
      >
        { password }
      </TextInput>

      <Button
        disabled={!email || !password}
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