import React, {useContext, useEffect} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {TokenPrincipal} from '../../../App';

const Splash = ({navigation}) => {
  const {token}: any = useContext(TokenPrincipal);
  setTimeout(() => {
    console.log(token);
    token === ''
      ? navigation.replace('Login')
      : navigation.replace('NavigationBottom');
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
