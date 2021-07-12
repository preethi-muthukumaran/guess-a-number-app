import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const generateRandomNumber = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}
const GameScreen = props => {

};

const styles = StyleSheet.create({});

export default GameScreen;