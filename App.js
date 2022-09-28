import React from 'react';
import { View, StyleSheet } from 'react-native';

import BackgroundGradient from './components/BackgroundGradient';
import TextGradient from './components/TextGradient';
import BorderGradient from './components/BorderGradient';

export default function App() {
  return (
    <View style={styles.containerStyle}>
      <BackgroundGradient/>
      <TextGradient/>
      <BorderGradient/>
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
