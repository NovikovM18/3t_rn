import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Users({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />
      <Text>users</Text>
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
