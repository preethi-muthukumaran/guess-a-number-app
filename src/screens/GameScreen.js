import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import NumberContainer from '../comp/NumberContainer';
import Card from '../comp/Card';
import Color from '../constants/colors';
import ContainerStyles from '../constants/ContainerStyles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}
const GameScreen = props => {
    const [generatedNumber, setGeneratedNumber] = useState(generateRandomNumber(1, 100, props.exclude));

    return(
        <View style = {styles.screen}>
            <Text>Computer's Guess...</Text>
            <NumberContainer>{generatedNumber}</NumberContainer>
            <Card style={{...ContainerStyles.buttonContainer, ...styles.buttonContainer}}>
                <View style={ContainerStyles.button}>
                    <Button
                        title="LOWER"
                        color={Color.warm}
                        onPress={() => { }}
                    />
                </View>
                <View style={ContainerStyles.button}>
                    <Button
                        title="CORRECT!"
                        color={Color.confirm}
                        onPress={() => { }}
                    />
                </View>
                <View style={ContainerStyles.button}>
                    <Button
                        title="GREATER"
                        color={Color.cold}
                        onPress={() => { }}
                    />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10, 
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default GameScreen;