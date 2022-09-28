import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

const BorderGradient = () => {
    return (
        <LinearGradient
            colors={['blue', 'red']}
            style={styles.containerStyle}>
            <View style={styles.textContainerStyle}>
                <Text style={styles.textStyle}>Border Gradient</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'blue',
        padding: 5
    },
    textContainerStyle: {
        backgroundColor: 'white',
        padding: 18
    },
    textStyle: {
        fontSize: 18,
    }
});

export default BorderGradient;
