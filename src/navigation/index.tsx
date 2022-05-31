import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Products from '../screens/products';
import Orders from '../screens/orders';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import {Image} from 'react-native';
import tabBottomStyle from '../styles/images/tabBottom';

const Tab = createBottomTabNavigator();
export default function NavigationManager() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" key={'Home'}>
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: () => (
              <Image
                style={tabBottomStyle.icons}
                source={require('..//assets/images/icons/products.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: () => (
              <Image
                style={tabBottomStyle.icons}
                source={require('..//assets/images/icons/orders.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Image
                style={tabBottomStyle.icons}
                source={require('..//assets/images/icons/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Shopping-Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: () => (
              <Image
                style={tabBottomStyle.icons}
                source={require('..//assets/images/icons/cart.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Image
                style={tabBottomStyle.icons}
                source={require('..//assets/images/icons/profile.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
