import {
  View, Image, Text, StyleSheet, ImageURISource,
} from 'react-native';
import React from 'react';

import codeMentorLogo from './assets/code-mentor-logo.jpeg';

const logoImage: ImageURISource = codeMentorLogo as ImageURISource;

export default function Header() {
  return (
    <View>
      <Image source={logoImage} style={styles.logo} />
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
