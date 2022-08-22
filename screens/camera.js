import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button } from "react-native-paper";
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { Camera, CameraType } from 'expo-camera';

export default function Cam() {
  
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();  
  
  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    return (
        <View>
            <Text> We need your permission to use camera</Text>
            <Button mode='contained' onPress={requestPermission}>Grant Permission</Button>
        </View>
    )
  }
  return (
    <View style={globalStyles.container}>
        <StatusBar style='dark' />
        <View style={globalStyles.camera}>
            <Text>Camera Page</Text>
        </View>
    </View>
  );
}
