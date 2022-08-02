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

  const [email, setEmail] = useState("");
  const [pasword, setpassWord] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/favicon.png')} />
      <Text>Vindicators</Text>
      <StatusBar style="auto" />
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
    marginBottom: 40,
  },
  inputView: {

  },
  TextInput: {

  },
  forgotButton: {

  },
  loginButton: {

  },
});
