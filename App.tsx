import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './src/pages/login-page';
import Container from './AppStyle';

export default function App() {
  return (
    <Container>
      <StatusBar />
      <Login />
    </Container>
  );
}
