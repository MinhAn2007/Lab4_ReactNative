import React from 'react';
import { StyleSheet, View } from 'react-native';
import  AppNavigator  from './src/navigation/Navigation';
export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator></AppNavigator>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});