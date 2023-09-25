import { StyleSheet, View, Button } from 'react-native';

export default function Home({ navigation }) {


  return (
    <View style={styles.container}>
      <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />
      <Button
        title="Go to Users"
        onPress={() => navigation.navigate('Users')}
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
