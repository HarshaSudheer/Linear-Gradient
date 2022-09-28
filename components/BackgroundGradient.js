import React from "react";
import {View, Text, StyleSheet} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

const BackgroundGradient = () => {
    return(
        <LinearGradient
            colors={['blue', 'red']}
            style={styles.containerStyle}>
            <Text style={styles.textStyle}>Background Gradient</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'blue',
        padding: 20
    },
    textStyle: {
        fontSize: 18,
        color: 'white'
    }
});

export default BackgroundGradient;