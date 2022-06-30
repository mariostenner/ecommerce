import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const leyenda =
  'Somos un mayorista de tecnología de la información comprometido con el crecimiento y desarrollo de nuestros asociados. Buscamos resolver necesidades de negocio a través de un amplio portafolio de soluciones que brindan las herramientas para el incremento de la productividad, la calidad de productos y servicios, así como el desarrollo de nuestros clientes y sus empresas.';
const AboutBanner = () => {
  return (
    <SafeAreaView style={StyleAboutBanner.content}>
      <View style={StyleAboutBanner.contentIntern}>
        <Text style={StyleAboutBanner.contentTitle}>Nuestra Visión</Text>
        <Text style={StyleAboutBanner.contentText}>{leyenda}</Text>
      </View>
    </SafeAreaView>
  );
};

const StyleAboutBanner = StyleSheet.create({
  content: {
    backgroundColor: 'green',
    marginVertical: 20,
  },
  contentIntern: {
    backgroundColor: 'white',
    margin: 10,
    height: 150,
    padding: 20,
  },
  contentTitle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'green',
  },
  contentText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 12,
    color: 'gray',
  },
});

export default AboutBanner;
