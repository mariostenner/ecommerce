import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AboutBanner from './about';
import BrandsLanding from './brands';
import ProductsLanding from './products';
import PromotionsView from './promotions';

const Home = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView>
        <PromotionsView />
        <BrandsLanding />
        <AboutBanner />
        <ProductsLanding />
        <BrandsLanding />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
