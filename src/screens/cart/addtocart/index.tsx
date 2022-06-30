import React from 'react';
import {Alert} from 'react-native';
import {PostAddCart} from '../../../utils/network';

export async function AddToCart({payload}: any, token: string) {
  await PostAddCart(payload, token)
    .then(response => {
      if (response.success === 1) {
        AlertCart();
      }
    })
    .catch(error => console.error(error));
}

function AlertCart() {
  Alert.alert('Succesfully', 'Added to Shopping cart', [
    {
      text: 'OK',
    },
  ]);
}
