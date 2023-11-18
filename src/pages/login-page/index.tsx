import React from 'react';
import Header from '../../components/header';
import LoginForm from '../../components/login-form';
import LoginContainer from './style';

export default function Login() {
  return (
    <LoginContainer>
      <Header />
      <LoginForm />
    </LoginContainer>
  );
}
