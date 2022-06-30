import React from 'react';
import OrderDetailsView from '../../../screens/orders/details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Orders from '../../../screens/orders';

const Stack = createNativeStackNavigator();
const NavigationOrders = () => {
  return (
    <Stack.Navigator key={'OrdersNav'} initialRouteName={'OrdersPrincipal'}>
      <Stack.Screen
        name="OrdersPrincipal"
        component={Orders}
        options={{title: 'Orders'}}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetailsView}
        options={{title: 'Order details'}}
      />
    </Stack.Navigator>
  );
};

export default NavigationOrders;
