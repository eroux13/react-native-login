import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './routes/loginStack';
// import MainTabs from './screens/mainContainer';

export default function App() {

  return (
    <NavigationContainer>
      <Navigator />
      {/* <MainTabs /> */}
    </NavigationContainer>
  );
}