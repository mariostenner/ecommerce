import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
const sizeImageProfile = 300;

const Profile = () => {
  const [data, setData] = useState();

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={StyleProfileScreen.containerImage}>
        <Image
          source={require('../../assets/images/general/myphoto.jpeg')}
          style={StyleProfileScreen.image}
        />
      </View>
      <Text style={StyleProfileScreen.infoTitle}>JOSE MARIO DERAS STENNER</Text>
      <TouchableOpacity>
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

export default Profile;
