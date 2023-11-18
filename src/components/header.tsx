import { View, Text } from 'react-native';
import React from 'react';
import codeMentorLogo from '../assets/code-mentor-logo.jpeg';
import LogoImage from '../styles/header';

export default function Header() {
  return (
    <View>
      <LogoImage source={codeMentorLogo} />
      <Text>CodeMentor</Text>
    </View>
  );
}
