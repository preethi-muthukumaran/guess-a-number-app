import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {
    return(
        <View style = {styles.container}>
            <Text>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderColor: Colors.primary
    }
});

export default NumberContainer;