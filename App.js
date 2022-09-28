import React from 'react';
import { View, StyleSheet } from 'react-native';

import BackgroundGradient from './components/BackgroundGradient';
import TextGradient from './components/TextGradient';

export default function App() {
  return (
    <View style={styles.containerStyle}>
      <BackgroundGradient/>
      <TextGradient/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
