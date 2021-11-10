import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReviewDetails from './screens/ReviewDetails';
import Home from './screens/Home';

import Headers from './screens/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Headers/>
      <Home/>
      <ReviewDetails/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
