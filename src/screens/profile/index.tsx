import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import {CartContext, TokenPrincipal} from '../../../App';
const sizeImageProfile = 300;
import {ProfileImageContext} from '../../navigation/NavigationBottom/NavigationProfile';
import {GetLogout} from '../../utils/network';

const ProfileView = ({navigation}) => {
  const {token, setToken}: any = useContext(TokenPrincipal);
  const [data, setData] = useState();
  const {imageuri, setImageuri}: any = useContext(ProfileImageContext);
  const {cart, setCart}: any = useContext(CartContext);

  useEffect(() => {}, [imageuri]);

  const ClearVariables = () => {
    GetLogout(token);
    setToken('');
    setImageuri('');
    setCart(0);
  };

  return (
    <SafeAreaView>
      <View style={StyleProfileScreen.containerImage}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Camera');
          }}>
          <Image
            resizeMode={'contain'}
            source={{uri: 'data:image/jpeg;base64,' + imageuri}}
            style={StyleProfileScreen.image}
          />
        </TouchableOpacity>
      </View>
      <Text style={StyleProfileScreen.infoTitle}>JOSE MARIO DERAS STENNER</Text>
      <TouchableOpacity
        onPress={() => {
          GetLogout(token);
          setToken('');
          ClearVariables();
          navigation.replace('SplashLogin', {screen: 'Login'});
        }}>
        <Image
          style={StyleProfileScreen.buttonLogout}
          source={require('../../assets/images/icons/logout.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const StyleProfileScreen = StyleSheet.create({
  image: {
    height: sizeImageProfile,
    width: sizeImageProfile,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'green',
    margin: 30,
  },
  containerImage: {alignItems: 'center', width: '100%'},
  infoTitle: {fontSize: 30, textAlign: 'center', color: 'blue'},
  buttonLogout: {alignSelf: 'center', marginTop: 90, height: 80, width: 80},
});

export default ProfileView;
