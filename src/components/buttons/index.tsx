import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CartContext, TokenPrincipal} from '../../../App';
import {AddToCart} from '../../screens/cart/addtocart';
import CheckoutBuy from '../../screens/cart/checkout';

const ButtonsComponent = ({title, font, button, border, payload}) => {
  const {token}: any = useContext(TokenPrincipal);
  return (
    <View style={StyleButtonsComponent.containerbuttons}>
      <TouchableOpacity
        onPress={() => {
          title === 'Add to cart +'
            ? AddToCart({payload}, token)
            : CheckoutBuy();
        }}
        style={[
          {backgroundColor: button, borderColor: border},
          StyleButtonsComponent.buttoncheck,
        ]}>
        <Text style={{color: font, fontSize: 25}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const StyleButtonsComponent = StyleSheet.create({
  containerbuttons: {
    backgroundColor: 'white',
    flex: 2,
  },
  buttoncheck: {
    alignSelf: 'center',
    width: 180,
    height: 60,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    padding: 12,
    marginTop: 25,
  },
});

export default ButtonsComponent;
