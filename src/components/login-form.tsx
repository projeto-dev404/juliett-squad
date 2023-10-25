import {
  View, Text, TextInput, Button, Alert,
} from 'react-native';
import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => (email && password
    ? Alert.alert('Logado com sucesso!', `Informações de login: \nEmail: ${email} \nSenha: ${password}`)
    : Alert.alert('Preencha todos os campos!'));

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
