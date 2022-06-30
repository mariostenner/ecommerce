import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CartContext, TokenPrincipal} from '../../../App';
import ButtonsComponent from '../../components/buttons';
import {GetOrdersCart} from '../../utils/network';
import {DeleteElementCart} from './deletecart';

const getTotal = (productsList: any, totalState: any) => {
  const {setTotal}: any = totalState;
  let sumaTotal = 0.0;
  productsList?.map(item => {
    sumaTotal =
      sumaTotal + item.Productos[0].PrecioNormal * item.Productos[0].Cantidad;
  });
  setTotal(sumaTotal.toFixed(2));
};

const Cart = () => {
  const [cartorder, setcartorder] = useState([]);
  const {token}: any = useContext(TokenPrincipal);
  const {setCart}: any = useContext(CartContext);
  const [total, setTotal] = useState(0.0);
  useEffect(() => {
    GetOrdersCart(token).then(response => {
      setcartorder(response);
      setCart(cartorder.length);
    });
    getTotal(cartorder, {total, setTotal});
  }, [cartorder, setCart, token, total]);
  return (
    <SafeAreaView style={{height: '100%'}}>
      <View style={StyleCart.orders}>
        <FlatList
          data={cartorder}
          renderItem={item => <ShopingCartList item={item.item} />}
        />
      </View>
      <View style={StyleCart.payments}>
        <Text
          style={{
            fontSize: 35,
            fontStyle: 'italic',
            color: 'red',
            marginTop: 30,
          }}>
          Total: ${total} USD
        </Text>
      </View>
      <ButtonsComponent
        title={'Checkout'}
        font={'blue'}
        button={'white'}
        border={'blue'}
        payload={undefined}
      />
    </SafeAreaView>
  );
};

const ShopingCartList = ({item}) => {
  const {token}: any = useContext(TokenPrincipal);
  const {IdPedido, Productos, FechaInicio, FechaFin} = item;
  const {NombreProducto, Cantidad, PrecioUnitario, Tipo, IdPedidoDetalle} =
    Productos[0];
  return (
    <SafeAreaView style={StyleCart.ordersitems}>
      <View style={{flex: 2}}>
        <Text
          style={{
            margin: 10,
            fontSize: 25,
            fontStyle: 'italic',
            color: 'blue',
          }}>
          Order ID: {IdPedido}
        </Text>
        <View>
          <Text style={StyleCart.description}>{NombreProducto}</Text>
          <Text style={StyleCart.description}>Cantidad: {Cantidad}</Text>
          <Text style={StyleCart.description}>Precio: {PrecioUnitario}</Text>
          <Text style={StyleCart.description}>Tipo de producto: {Tipo}</Text>
          <Text style={StyleCart.description}>FechaInicio: {FechaInicio}</Text>
          <Text style={StyleCart.description}>FechaFin: {FechaFin}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            DeleteElementCart(IdPedidoDetalle, token);
          }}>
          <Image
            style={StyleCart.delete}
            source={require('../../assets/images/icons/trash.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const StyleCart = StyleSheet.create({
  payments: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'flex-end',
    paddingRight: 30,
    borderTopWidth: 1,
    borderTopColor: 'green',
  },
  orders: {
    width: '100%',
    backgroundColor: 'white',
    flex: 8,
  },
  containerbuttons: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttoncheck: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '75%',
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    padding: 5,
    marginTop: 40,
  },
  ordersitems: {
    height: 200,
    margin: 20,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  description: {
    marginVertical: 2,
    marginHorizontal: 20,
    color: 'gray',
  },
  delete: {
    height: 30,
    width: 30,
    margin: 15,
  },
});

export default Cart;
