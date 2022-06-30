import React, {createContext, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationSplashLogin from './SplashLogin';
import NavigationBottom from './NavigationBottom';
import Login from '../screens/login';
import Splash from '../screens/splash';
import {Image} from 'react-native';
import Cart from '../screens/cart';
import Home from '../screens/home';
import Profile from '../screens/profile';
import tabBottomStyle from '../styles/images/tabBottom';
import NavigationOrders from './NavigationBottom/NavigationOrders';
import NavigationProducts from './NavigationBottom/NavigationProducts';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
