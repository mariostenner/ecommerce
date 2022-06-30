import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MosaicListComponent = ({navigation, screentosee, testArray}) => {
  const {Nombre, Fabricante, PrecioNormal} = testArray;
  return (
    <TouchableOpacity
      style={StyleMosaicListComponent.container}
      onPress={() => navigation.navigate(screentosee, testArray)}>
      <Image
        source={require('..//../../assets/images/brands/microsoft.png')}
        style={StyleMosaicListComponent.image}
        resizeMode={'stretch'}
      />
      <View style={StyleMosaicListComponent.containertext}>
        <Text style={StyleMosaicListComponent.title}>{Nombre}</Text>
        <Text style={StyleMosaicListComponent.fabricante}>{Fabricante}</Text>
        <Text style={StyleMosaicListComponent.price}>${PrecioNormal} USD</Text>
      </View>
    </TouchableOpacity>
  );
};

const StyleMosaicListComponent = StyleSheet.create({
  container: {
    height: 250,
    width: 170,
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  containertext: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    height: 80,
    fontSize: 20,
    color: 'green',
    marginHorizontal: 5,
    textAlign: 'center',
  },
  fabricante: {
    height: 20,
    fontSize: 10,
    color: 'blue',
  },
  price: {
    fontSize: 25,
    color: 'gray',
    fontStyle: 'italic',
  },
});

export default MosaicListComponent;
