import React, { useState } from 'react';
import { TextInput, Button } from "react-native-paper";
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.logoContainer}>
            <Image style={globalStyles.logo} source={require('../assets/favicon.png')} />
            <Text style={globalStyles.appName}>Vindicators Image Recognition</Text>
        </View>

        <View>
            <TextInput 
                label='Email'
                left={<TextInput.Icon name='email'/>}
                onChangeText={(email) => setEmail(email)}
            />
        </View>

        <View>
        <TextInput 
                label='Password'
                left={<TextInput.Icon name='lock'/>}
                right={<TextInput.Icon name='eye'/>}
                onChangeText={(password) => setPassword(password)}
            />
        </View>

        <View>
        <TextInput 
                label='Confirm Password'
                left={<TextInput.Icon name='lock'/>}
                right={<TextInput.Icon name='eye'/>}
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            />
        </View>

        <View>
            <Button icon='login' mode='contained' onPress={() => console.log('sign up button pressed')}>
                Sign Up
            </Button>
            <Button mode='text' onPress={() => console.log('redirecting to login')}>
                Already sign up? Login here!
            </Button>
        </View>
    </View>
  );
}
