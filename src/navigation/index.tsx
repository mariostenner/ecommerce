import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationSplashLogin from './SplashLogin';
import NavigationBottom from './NavigationBottom';

const Stack = createNativeStackNavigator();
export default function NavigationManager() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashLogin" key={'ManageNav'}>
        <Stack.Screen
          name="SplashLogin"
          component={NavigationSplashLogin}
          options={{
            title: 'SplashLogin',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NavigationBottom"
          component={NavigationBottom}
          options={{
            title: 'NavigationBottom',
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
