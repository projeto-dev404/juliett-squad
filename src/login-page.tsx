import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import LoginForm from './components/login-form';

export default function Login() {
  return (
    <View style={styles.container}>
      <Header />
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
