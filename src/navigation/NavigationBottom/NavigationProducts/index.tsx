import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../../../screens/products';
import ProductsDetailsView from '../../../screens/products/details';

const Stack = createNativeStackNavigator();
const NavigationProducts = () => {
  return (
    <Stack.Navigator key={'ProductsNav'} initialRouteName={'ProductsPrincipal'}>
      <Stack.Screen
        name="ProductsPrincipal"
        component={Products}
        options={{title: 'Products'}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductsDetailsView}
        options={{title: 'Product details'}}
      />
    </Stack.Navigator>
  );
};

export default NavigationProducts;
