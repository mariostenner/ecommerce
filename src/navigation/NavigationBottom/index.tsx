import React, {useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import {Image} from 'react-native';
import tabBottomStyle from '../../styles/images/tabBottom';
import NavigationOrders from './NavigationOrders';
import NavigationProducts from './NavigationProducts';
import NavigationCart from './NavigationCart';
import {CartContext, TokenPrincipal} from '../../../App';
import CameraViewer from '../../utils/camera';
import NavigationProfile from './NavigationProfile';
import { GetOrdersCart } from '../../utils/network';

const Tab = createBottomTabNavigator();
export default function NavigationBottom() {
  const {cart, setCart}: any = useContext(CartContext);
  const {token}: any = useContext(TokenPrincipal);
  useEffect(() => {
    GetOrdersCart(token).then(response => {
      setCart(response.length);
    });
  }, [cart, setCart, token]);
  return (
    <Tab.Navigator initialRouteName="Home" key={'HomeNav'}>
      <Tab.Screen
        name="Products"
        component={NavigationProducts}
        options={{
          headerShown: false,
          tabBarLabel: 'Products',
          tabBarIcon: () => (
            <Image
              style={tabBottomStyle.icons}
              source={require('../../assets/images/icons/products.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={NavigationOrders}
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',
          tabBarIcon: () => (
            <Image
              style={tabBottomStyle.icons}
              source={require('../../assets/images/icons/orders.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleContainerStyle: false,
          headerBackground: () => {
            return (
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                }}
                resizeMode={'center'}
                source={require('../../assets/images/general/nombre.jpg')}
              />
            );
          },
          headerStatusBarHeight: 110,
          headerTitle: '',
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              style={tabBottomStyle.icons}
              source={require('../../assets/images/icons/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping-Cart"
        component={NavigationCart}
        options={{
          tabBarBadge: cart,
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: () => (
            <Image
              style={tabBottomStyle.icons}
              source={require('../../assets/images/icons/cart.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NavigationProfile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image
              style={tabBottomStyle.icons}
              source={require('../../assets/images/icons/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
