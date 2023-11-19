import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import codeMentorLogo from '../../assets/code-mentor-logo.jpeg';
import LogoImage from './style';

export default function Header() {
  const loginStatus = useSelector((state) => state.login.isLoggedIn);

  return (
    <View>
      <LogoImage source={codeMentorLogo} />
      <Text>CodeMentor</Text>
      <Text>
        Login status:
        {' '}
        {`${loginStatus}`}
      </Text>
    </View>
  );
}
