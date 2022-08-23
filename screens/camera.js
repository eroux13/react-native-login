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

  toggleCameraType = () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back))
  }

  return (
    <View style={globalStyles.container}>
        <StatusBar style='dark' />
        <Camera style={globalStyles.camera} type={type}>
            <View>
                <Button style={globalStyles.flipCamButton} icon='repeat' mode='contained' onPress={toggleCameraType}>
                    Flip Camera
                </Button>
            </View>
        </Camera>
    </View>
  );
}
