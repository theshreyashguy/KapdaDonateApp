// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InfoScreen from '../screens/InfoScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

type RootStackParamList = {
  Info: undefined;
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  Password: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Splash"  >
       <Stack.Screen name="Splash" component={SplashScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Info" component={InfoScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Password" component={ForgotPasswordScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
