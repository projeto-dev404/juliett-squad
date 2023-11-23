import {
  View, TextInput, Button, Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../slices/login-slice';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email && password) {
      dispatch(login());
      Alert.alert('Logado com sucesso!', `Informações de login: \nE-mail: ${email} \nSenha: ${password}`);
    } else {
      Alert.alert('Preencha todos os campos!');
    }
  };

  const handleRegister = () => {
    if (email && password) {
      Alert.alert('Cadastrado com sucesso!');
    } else {
      Alert.alert('Preencha todos os campos!');
    }
  };

  return (
    <View>
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
