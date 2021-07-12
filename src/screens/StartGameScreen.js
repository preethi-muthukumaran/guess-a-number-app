import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../comp/Card';
import Colors from '../constants/colors';
import Input from '../comp/Input';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const confirmedInputHandler = () => {
        let tempInputVar = parseInt(enteredValue);
        if (isNaN(tempInputVar) || tempInputVar <= 0 || tempInputVar > 99) {
            Alert.alert('Invalid input!', 'Please enter a number between 1-99', [
                {
                    text: "Ok",
                    onPress: () => {resetInputHandler},
                    style: "destructive"
                }
            ])
            setConfirmed(false);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(tempInputVar);
        setEnteredValue('');
    };

    let confirmedInput;

    if (confirmed) {
        confirmedInput = 
        <Card style = {styles.confirmContainer}> 
            <Text style = {styles.headerText}>Selected Number</Text>
            <Text>
                {selectedNumber}
            </Text>
        </Card>
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    return (
        <TouchableWithoutFeedback 
        onPress = {() => {
            Keyboard.dismiss();
        }}>
            <View style = {styles.main}>
                <Text style = {styles.mainText}>Start a New Game!</Text>
                <Card style = {styles.inputContainer}>
                    <Text>Enter a Number</Text>
                    <Input 
                        style = {styles.textInput}
                        placeholder = '##'
                        autoCapitalize = 'none'
                        keyboardType = 'number-pad'
                        maxLength = {2}
                        textAlign = 'center'
                        onChangeText = {numberInputHandler}
                        value = {enteredValue}
                    />
                    <View style = {styles.buttonContainer}>
                        <View style = {styles.button}>
                            <Button
                                title = 'Confirm'
                                onPress = {confirmedInputHandler}
                                color = {Colors.confirm}
                            />
                        </View>
                        <View style = {styles.button}>
                            <Button
                                title = 'Reset'
                                onPress = {resetInputHandler}
                                color = {Colors.reject}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedInput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    mainText: {
        fontSize: 20
    },
    inputContainer: {
        width: 300,
        maxWidth: '90%',
        alignItems: 'center',
    },
    textInput: {
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    button: {
        width: 100
    },
    confirmContainer: {
        borderWidth: 10,
        borderColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }, 
    headerText: {
        paddingVertical: 5
    }
});

export default StartGameScreen;