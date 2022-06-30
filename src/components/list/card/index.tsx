import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CardListComponent = ({navigation, screen, testArray}) => {
  const {IdPedido, Estatus} = testArray;
  return (
    <TouchableOpacity
      style={StyleCardListComponent.container}
      onPress={() => navigation.navigate(screen, testArray)}>
      <Image
        source={require('..//../../assets/images/brands/microsoft.png')}
        style={StyleCardListComponent.image}
        resizeMode={'stretch'}
      />
      <View style={StyleCardListComponent.containertext}>
        <Text style={StyleCardListComponent.title}>Pedido: {IdPedido}</Text>
        <Text style={StyleCardListComponent.desc}>{Estatus}</Text>
      </View>
      <View style={StyleCardListComponent.containerarrow}>
        <Image
          source={require('../../../assets/images/icons/adelante.png')}
          style={{width: 30, height: 30}}
        />
      </View>
    </TouchableOpacity>
  );
};

const StyleCardListComponent = StyleSheet.create({
  container: {
    height: 120,
    alignContent: 'center',
    textAlignVertical: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    flex: 3,
    margin: 5,
  },
  containertext: {
    flexDirection: 'column',
    flex: 6,
    margin: 20,
  },
  title: {
    fontSize: 25,
    fontStyle: 'italic',
    flex: 2,
    color: 'blue',
  },
  desc: {
    fontSize: 20,
    fontFamily: 'Arial',
    marginTop: 15,
    flex: 2,
    color: 'green',
  },
  containerarrow: {
    flex: 1,
    margin: 10,
    alignContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default CardListComponent;
