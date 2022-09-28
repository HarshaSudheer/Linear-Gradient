import React from "react";
import { Text, StyleSheet } from "react-native";

import { LinearGradient, } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const TextGradient = () => {
    return (
        <MaskedView maskElement={<Text style={{ fontSize: 18, fontWeight: '700' }}>Text Gradient</Text>}>
            <LinearGradient colors={['blue', 'red']}>
                <Text style={{opacity: 0, fontSize: 18, fontWeight: '700'}}>Text Gradient</Text>
            </LinearGradient>
        </MaskedView>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16
    }
});

export default TextGradient;