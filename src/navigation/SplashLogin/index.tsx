import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/splash';
import Login from '../../screens/login';

const Stack = createNativeStackNavigator();
export default function NavigationSplashLogin({navigator}) {
  return (
    <Stack.Navigator initialRouteName="Splash" key={'InitialNav'}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          title: 'Splash',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerBackVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
