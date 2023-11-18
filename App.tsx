import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import Login from './src/pages/login-page';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <StatusBar />
      <Login />
    </Container>
  );
}
