import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../../../screens/cart';

const Stack = createNativeStackNavigator();
const NavigationCart = () => {
  return (
    <Stack.Navigator key={'CartNav'} initialRouteName={'CartPrincipal'}>
      <Stack.Screen
        name={'CartPrincipal'}
        options={{title: 'Shopping-Cart', headerTitleAlign: 'center'}}
        component={Cart}
      />
      <Stack.Screen
        name="CartCheckout"
        component={''}
        options={{title: 'Checkout'}}
      />
    </Stack.Navigator>
  );
};

export default NavigationCart;
