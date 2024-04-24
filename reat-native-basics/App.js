import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='Tap me !' />
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

  dummyText: {
    margin: 16, 
    borderWidth: 1, 
    borderColor: 'black',
    padding: 8 
  }
});
