import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [pasword, setpassWord] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/favicon.png')} />
      <Text style={styles.appName}>Vindicators Image Recognition</Text>

      <StatusBar style='auto' />
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
          placeholder='Email'
          placeholderTextColor='#003f5c'
          onChangeText={(password) => setPassword(password)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  appName: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgotButton: {

  },
  loginButton: {

  },
});
