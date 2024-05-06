import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {

  const [userNumber , setUserNumber] = useState(null);

  function pickedNumberHandler(pickerNumber) {
    setUserNumber(pickerNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if(userNumber)
  {
    screen = <GameScreen userNumber={userNumber} />
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} 
          resizeMode="cover" 
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.3
  }
});
