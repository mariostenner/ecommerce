import React, {useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ButtonsComponent from '../../../components/buttons';
import shopingcartpayload from '../../../models/shopping-cart';

const ProductsDetailsView = ({route}) => {
  const [payload, setPayload] = useState();
  const {
    Nombre,
    Descripcion,
    PrecioNormal,
    IdERP,
    EsquemaRenovacion,
    IdProducto,
  } = route.params;

  useEffect(() => {
    const prepayload: shopingcartpayload = {
      IdProducto: IdProducto,
      Cantidad: 1,
      IdEmpresaUsuarioFinal: 50573,
      MonedaPago: 'Pesos',
      IdEsquemaRenovacion: 1,
      IdFabricante: 1,
      Especializacion: 'NA',
      IdERP: IdERP,
    };
    setPayload(prepayload);
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={StyleDetailComponent.container}>
        <Image
          style={StyleDetailComponent.image}
          source={require('../../../assets/images/brands/microsoft.png')}
        />
        <View style={StyleDetailComponent.containerdesc}>
          <Text style={StyleDetailComponent.desc1}>{Nombre}</Text>
          <Text style={StyleDetailComponent.desc2}>{Descripcion}</Text>
          <Text style={StyleDetailComponent.desc3}>
            Esquema de renovacion: {EsquemaRenovacion}
          </Text>
          <Text style={StyleDetailComponent.desc4}>ID Articulo: {IdERP}</Text>
          <Text style={StyleDetailComponent.desc5}>${PrecioNormal} USD</Text>
        </View>
        <ButtonsComponent
          title={'Add to cart +'}
          font={'white'}
          button={'green'}
          border={'white'}
          payload={payload}
        />
      </View>
    </SafeAreaView>
  );
};

const StyleDetailComponent = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
    borderBottomWidth: 2,
    borderColor: 'green',
    borderRadius: 25,
  },
  containerdesc: {
    marginHorizontal: 5,
  },
  desc1: {
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
  },
  desc2: {
    margin: 5,
    fontSize: 20,
    color: 'gray',
    textAlign: 'justify',
  },
  desc3: {
    margin: 5,
    fontSize: 20,
    color: 'black',
  },
  desc4: {
    fontSize: 15,
    color: 'gray',
  },
  desc5: {
    marginTop: 20,
    fontSize: 30,
    color: 'gray',
    textAlign: 'center',
  },
  buttonadd: {
    alignSelf: 'center',
    backgroundColor: 'green',
    width: '75%',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    padding: 5,
  },
});

export default ProductsDetailsView;
