import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { setCount } from '../src/Store';

export default function Tasks({ navigation }) {
  const [num, setNum] = useState(0);
  const [val, setVal] = useState('first_init');

  const counter = useSelector((state) => state.counter); 
  const dispatch = useDispatch();

  useEffect(() => {
    setNum(num+1);
  }, [val]);

  useEffect(() => {
    dispatch((setCount(num)))
  }, [num]);
  

  return (
     <View style={styles.container}>
      <Button
        title="Go to Users"
        onPress={() => navigation.navigate('Users')}
      />

      <Text style={styles.title}>{ counter.value }</Text>
      <Text style={styles.title}>{ val }</Text>
      <Text style={styles.title}>{ num }</Text>
      
      <TextInput 
        style={styles.input}
        onChangeText={value => setVal(value)}
      >
        { val }
      </TextInput>

      <Button
        title="+"
        onPress={() => setNum(num+1)}
      />

      <Button
        title="-"
        onPress={() => setNum(num-1)}
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
