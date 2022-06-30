import React from 'react';
import {Alert} from 'react-native';
import {DeleteCart} from '../../../utils/network';

export async function DeleteElementCart(itemDelete: any, token: string) {
  //console.log(itemDelete);
  await DeleteCart(itemDelete, token)
    .then(response => {
      if (response.data.success === 1) {
        AlertDeleteCart();
      }
    })
    .catch(error => console.error(error));
}

export function AlertDeleteCart() {
  Alert.alert('Delete Order', 'Your item was deleted', [{text: 'OK'}]);
}
