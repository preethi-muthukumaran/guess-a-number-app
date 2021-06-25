import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import Card from '../comp/Card';
import Colors from '../constants/colors';
import { NavigationContainer } from '@react-navigation/native';

const ConfirmInputScreen = props => {
    return(
        <View style = {styles.main}>
            <Card style = {styles.confirmContainer}>
                <Text>Are you sure this is the number you want to enter?</Text>
                <Text>{props.input}</Text>
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button
                            title = "Yes"
                            onPress = {} //navigate on to next game screen
                            color = {Colors.confirm}
                        />
                    </View>
                    <View style = {styles.button}>
                        <Button
                            title = "No"
                            onPress = {() => Navigation.navigate('Start')} //navigate back to start screen with empty field
                            color = {Colors.reject}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    confirmContainer: {
        width: 300,
        maxWidth: '90%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    button: {
        width: 10
    }
});

export default ConfirmInputScreen;