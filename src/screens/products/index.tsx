import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {TokenPrincipal} from '../../../App';
import MosaicComponent from '../../components/mosaic';
import {GetProducts} from '../../utils/network';

const Products = ({navigation}) => {
  const {token} = useContext(TokenPrincipal);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      await GetProducts(token).then(response => setProducts(response));
    } catch (error) {
      console.log('🚀 ~ file: index.tsx ~ line 17 ~ getInfo ~ error', error);
    }
  };
  return (
    <SafeAreaView>
      <MosaicComponent
        testArray={products}
        screentosee={'ProductDetails'}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Products;
