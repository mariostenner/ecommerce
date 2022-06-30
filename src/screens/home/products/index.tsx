import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

const ProductsLanding = () => {
  let testArray = new Array(40).fill({Nombre: '../'});
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        style={StyleProductsLanding.container}
        zoomScale={40}>
        {testArray?.map(n => {
          //return <Text style={StyleProductsLanding.test}>{n.Nombre}</Text>;
          return (
            <Image
              style={StyleProductsLanding.images}
              source={require('../../../assets/images/brands/microsoft.png')}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const StyleProductsLanding = StyleSheet.create({
  test: {
    fontSize: 40,
    backgroundColor: 'blue',
    borderColor: 'green',
    borderWidth: 2,
    height: 200,
    width: 200,
  },
  images: {
    width: 120,
    height: 120,
    margin: 20,
  },
  container: {
    backgroundColor: 'blue',
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default ProductsLanding;
