import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import HorizontalLine from './components/HorizontalLine';
import FlexBoxLayout from './components/FlexBoxLayout';

export default function App() {
  return (
    <>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your course goal' />
          <Button title='Add Goal' />
        </View>
        <View>
          <Text>List of goals</Text>
        </View>
      </View>
      <HorizontalLine />
      <FlexBoxLayout />
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
