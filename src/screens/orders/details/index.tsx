import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonsComponent from '../../../components/buttons';

const OrderDetailsView = ({route}) => {
  const {Detalles, FechaInicio, FechaFin} = route.params;
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={StyleDetailComponent.container}>
        <FlatList
          data={Detalles}
          renderItem={item => (
            <ItemDetail
              details={item.item}
              FechaInicio={FechaInicio}
              FechaFin={FechaFin}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export const ItemDetail = ({details, FechaInicio, FechaFin}) => {
  console.log(details);
  const {Nombre, Cantidad} = details;
  return (
    <View style={StyleDetailComponent.containeritem}>
      <Image
        style={StyleDetailComponent.image}
        source={require('../../../assets/images/brands/microsoft.png')}
      />
      <View>
        <Text style={StyleDetailComponent.desc1}>{Nombre}</Text>
        <Text style={StyleDetailComponent.desc3}>Quantity: {Cantidad}</Text>
        <Text style={StyleDetailComponent.desc2}>
          Start date: {FechaInicio.toString().substring(0, 10)}
        </Text>
        <Text style={StyleDetailComponent.desc2}>
          Finish date: {FechaFin.toString().substring(0, 10)}
        </Text>
      </View>
    </View>
  );
};

const StyleDetailComponent = StyleSheet.create({
  containeritem: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    width: 300,
    height: 180,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  image: {
    width: 70,
    height: 70,
    margin: 20,
    borderBottomWidth: 2,
    borderColor: 'green',
    borderRadius: 25,
  },
  containerdesc: {
    margin: 20,
  },
  desc1: {
    fontSize: 20,
    color: 'green',
    textAlign: 'justify',
    marginVertical: 10,
    marginHorizontal: 5,
    width: 150,
  },
  desc2: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'justify',
    marginTop: 5,
    width: 170,
  },
  desc3: {
    fontSize: 20,
    color: 'black',
  },
  desc4: {
    fontSize: 15,
    color: 'gray',
  },
  buttoncancel: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: '75%',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    padding: 5,
    marginTop: 35,
  },
});

export default OrderDetailsView;
