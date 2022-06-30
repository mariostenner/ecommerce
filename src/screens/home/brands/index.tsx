import {parse} from '@babel/core';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import urls from '../../../utils/urls';
let testArray = [
  {uriImage: urls.URL_MS},
  {uriImage: urls.URL_AD},
  {uriImage: urls.URL_IBM},
  {uriImage: urls.URL_VM},
];
const BrandsLanding = () => {
  return (
    <SafeAreaView>
      <FlatList
      style={StyleProductsLanding.container}
        horizontal={true}
        data={testArray}
        renderItem={item => (
          <Image
            source={{
              uri: item.item.uriImage,
            }}
            style={StyleProductsLanding.images}
          />
        )}
      />
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
    borderRadius: 10,
  },
  container: {
    backgroundColor: 'green',
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default BrandsLanding;
