import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createStackNavigator } from 'react-navigation-stack';
import Icons from 'react-native-vector-icons/Ionicons';
import Home from './home';
import Settings from './settings';
import Camera from './camera';
import LanguageSelection from './languageSelection'; 
import { globalStyles } from '../styles/global';

export default function MainTabs() {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <View style={globalStyles.container}>
        <StatusBar style='dark' />
        <Tab.Navigator initialRouteName='Home' activeColor='#fff'>
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({color}) => (<Icons name='home' color={color} size={26}/>)
                }}
            />
            <Tab.Screen 
                name='Settings'
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarColor: '#1f65ff',
                    tabBarIcon: ({color}) => (<Icons name='settings' color={color} size={26}/>)
                }}
            />
            <Tab.Screen 
                name='Camera'
                component={Camera}
                options={{
                    tabBarLabel: 'Camera',
                    tabBarColor: '#694fad',
                    tabBarIcon: ({color}) => (<Icons name='camera' color={color} size={26}/>)
                }}
            />
            <Tab.Screen 
                name='Language Selection'
                component={LanguageSelection}
                options={{
                    tabBarLabel: 'Language',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({color}) => (<Icons name='language' color={color} size={26}/>)
                }}
            />
        </Tab.Navigator>


    </View>
  );
}
