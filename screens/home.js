import React, { useState } from 'react';
import { TextInput, Button } from "react-native-paper";
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SignUp({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const pressHandlerLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={globalStyles.container}>
        <Text>Welcome Home Vindicator</Text>
    </View>
  );
}
