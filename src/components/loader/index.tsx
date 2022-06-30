import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styleLoading.principal}>
      <Text style={styleLoading.tag}>Loading...</Text>
      <ActivityIndicator
        style={styleLoading.loader}
        size={'large'}
        color={'green'}
      />
    </SafeAreaView>
  );
};

const styleLoading = StyleSheet.create({
  principal: {
    backgroundColor: 'white',
    height: '100%',
  },
  loader: {
    marginTop: 20,
  },
  tag: {
    marginTop: 50,
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
  },
});

export default LoadingScreen;
