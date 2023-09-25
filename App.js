import { StyleSheet } from 'react-native';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import store from './src/Store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
