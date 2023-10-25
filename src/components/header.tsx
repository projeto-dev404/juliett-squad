import {
  View, Image, Text, StyleSheet,
} from 'react-native';
import React from 'react';
import codeMentorLogo from '../assets/code-mentor-logo.jpeg';

export default function Header() {
  return (
    <View>
      <Image source={codeMentorLogo} style={styles.logo} />
      <Text>CodeMentor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 96,
    height: 96,
  },
});
