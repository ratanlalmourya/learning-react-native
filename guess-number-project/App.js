import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import {SplashScreen} from "expo-splash-screen";
import { Font } from "expo";

export default function App() {

  const [userNumber , setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  
  const [isFontLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf")
  })
  

  function pickedNumberHandler(pickerNumber) {
    setUserNumber(pickerNumber);
    setIsGameOver(false);
  }

  function gameOverHandler(roundsNumber) {
    console.log("game over");
    setIsGameOver(true);
    setGuessRounds(roundsNumber);
  }

  function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if(userNumber)
  {
    screen = <GameScreen onGameOver={gameOverHandler} userNumber={userNumber}  />
  }

  if(isGameOver && userNumber)
  {
     screen = <GameOverScreen  userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}  />
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
