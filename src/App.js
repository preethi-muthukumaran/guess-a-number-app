import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './comp/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState({});

  const onStartGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  }

  const content = <StartGameScreen onStartGame = {onStartGameHandler}/>;

  if (userNumber) {
    content = <GameScreen exclude = {userNumber}/>
  }

  return (
    <View style = {styles.screen}>
      <Header title = "Guess a Number!"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
