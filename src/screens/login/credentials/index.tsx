import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LoadingScreen from '../../../components/loader';
import urls from '../../../utils/urls';
import login from '../../../models/auth/login';
//import token from '../../../utils/token';
import {TokenPrincipal} from '../../../../App';
import {PostLogin} from '../../../utils/network';

const Credentials = ({navigation}) => {
  const {setToken}: any = useContext(TokenPrincipal);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const oauth: login = {CorreoElectronico: user, Contrasena: pass};

  async function getToken(estatus: boolean) {
    if (!estatus) {
      setLoading(false);
      // try {
      //   setToken((await PostLogin(oauth))[0].Token);
      //   //console.log(token);
      //   navigation.replace('NavigationBottom');
      // } catch (e) {
      //   setLoading(false);
      //   console.error('Error de login' + e);
      // }
      try {
        const responseToken = await PostLogin(oauth); //DESCOMENTAR
        console.log(responseToken);
        if (responseToken[0].Success === 1) {
          setToken(responseToken[0].Token);
          //setToken((await PostLogin(oauth))[0].Token);
          //console.log(token.data[0].Token);
          setLoading(false);
          navigation.replace('NavigationBottom');
        } else {
          setLoading(false);
          Alert.alert('Login incorrecto', 'Cuenta o contraseña incorrecta');
        }
      } catch (e) {
        setLoading(false);
        console.error('Error de login' + e);
      }
    }
  }

  useEffect(() => {
    getToken(true);
  }, [getToken]);
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View>
        <TextInput
          style={stylesLogin.input}
          placeholder={'USER'}
          textAlign={'center'}
          placeholderTextColor={'gray'}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          defaultValue={'demostage@compusoluciones.com'}
          editable={!loading}
          onChangeText={user => setUser(user)}
          autoFocus={true}
        />
        <TextInput
          style={stylesLogin.input}
          placeholder={'PASSWORD'}
          textAlign={'center'}
          placeholderTextColor={'gray'}
          textContentType={'password'}
          secureTextEntry={true}
          defaultValue={'80e3c46d'}
          editable={!loading}
          onChangeText={pass => setPass(pass)}
        />
      </View>
      {loading === false ? (
        <View>
          <Pressable style={stylesLogin.button} onPress={() => getToken(false)}>
            <Text style={{fontSize: 30, color: 'white', padding: 5}}>
              LOGIN
            </Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <LoadingScreen />
        </View>
      )}
    </SafeAreaView>
  );
};

const stylesLogin = StyleSheet.create({
  input: {
    marginTop: 30,
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
    color: 'green',
    fontSize: 25,
  },
  button: {
    marginTop: 40,
    height: 50,
    width: 150,
    backgroundColor: 'green',
    borderRadius: 10,
    fontSize: 25,
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  },
});

export default Credentials;
