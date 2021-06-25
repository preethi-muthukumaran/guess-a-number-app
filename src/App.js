import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './comp/Header';
import StartGameScreen from './screens/StartGameScreen';
import { NavigationContainer } from '@react-navigation/native';
import ConfirmInputScreen from './screens/ConfirmInputScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Header title = "Guess a Number!"/>
      <Stack.Navigator>
        <Stack.Screen
          name = "Start"
          components = {StartGameScreen}
          options = {{title: 'Start'}}
        />
        <Stack.Screen
          name = "Confirm Input"
          components = {ConfirmInputScreen}
          options = {{title: 'ConfirmInput'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
