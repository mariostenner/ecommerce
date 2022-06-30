import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import Credentials from './credentials';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{height: '30%', marginBottom: 20}}>
        <Image
          style={{
            height: 120,
            width: 370,
            resizeMode: 'stretch',
            marginTop: 100,
            marginBottom: 60,
          }}
          source={require('../../assets/images/general/nombre.jpg')}
        />
      </View>
      <Credentials navigation={navigation} />
    </SafeAreaView>
  );
};

export default Login;
