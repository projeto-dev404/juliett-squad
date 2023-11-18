import {
  View, Text, TextInput, Button, Alert,
} from 'react-native';
import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => (email && password
    ? Alert.alert('Logado com sucesso!', `Informações de login: \nE-mail: ${email} \nSenha: ${password}`)
    : Alert.alert('Preencha todos os campos!'));

  const handleRegister = () => (email && password
    ? Alert.alert('Cadastrado com sucesso!')
    : Alert.alert('Preencha todos os campos!'));

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
}
