import React from 'react';
import { View, StyleSheet } from 'react-native';

import BackgroundGradient from './components/BackgroundGradient';

export default function App() {
  return (
    <View style={styles.containerStyle}>
      <BackgroundGradient/>
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
