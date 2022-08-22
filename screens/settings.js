import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Button } from "react-native-paper";
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SignUp({ navigation }) {

  return (
    <View style={globalStyles.container}>
        <StatusBar style='dark' />
        <View style={globalStyles.settings}>
            <Text>Settings Page</Text>
        </View>
    </View>
  );
}
