import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import { TokenPrincipal } from '../../../App';
import ListComponent from '../../components/list';
import {GetMyOrders} from '../../utils/network';

const Orders = ({navigation}) => {
  const {token} = useContext(TokenPrincipal);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      await GetMyOrders(token).then(response => setOrders(response));
    } catch (error) {
      console.log('🚀 ~ file: index.tsx ~ line 17 ~ getInfo ~ error', error);
    }
  };
  return (
    <SafeAreaView>
      <ListComponent
        arrayList={orders}
        screentosee={'OrderDetails'}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Orders;
