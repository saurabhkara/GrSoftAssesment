import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login';
import OnBoarding from './screen/OnBoarding';

import Intro from './screen/Intro'
import Signup from './screen/Signup';
import SignupField from './screen/SignupField';
import ResetPassowrd from './screen/ResetPassowrd';
import AllowNotification from './screen/AllowNotification';
import ProfileSetupName from './screen/ProfileSetupName';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignupField" component={SignupField} />
        <Stack.Screen name="ResetPassword" component={ResetPassowrd} />
        <Stack.Screen name="AllowNotification" component={AllowNotification} />
        <Stack.Screen name="ProfileSetupName" component={ProfileSetupName} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
