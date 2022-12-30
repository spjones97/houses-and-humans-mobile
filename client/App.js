import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Appbar, Card } from 'react-native-paper';

import logo from './app/assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar>
        <Text variant="titleMedium">Items</Text>
        <Image
          source={require('./app/assets/logo.png')}
        />
      </Appbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
