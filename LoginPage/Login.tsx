import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';

export default function Login() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
