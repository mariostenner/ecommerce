import React, {useEffect} from 'react';
import {Image, SafeAreaView} from 'react-native';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 2000);
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Image
        style={{height: 300, width: 300}}
        source={require('../../assets/images/general/isotipo.png')}
      />
    </SafeAreaView>
  );
};

export default Splash;
