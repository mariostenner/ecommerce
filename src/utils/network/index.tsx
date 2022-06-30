import React from 'react';
import axios from 'axios';
import urls from '../urls/index';
import login from '../../models/auth/login';

export const PostLogin = async (oauth: login) => {
  return await (
    await axios.post(urls.URL_LOGIN, oauth)
  ).data;
};

export const GetProducts = async (token: any) => {
  return (await axios.get(urls.URL_PRODUCTS, {headers: {token: token}})).data
    .data;
};

export const GetMyOrders = async (token: any) => {
  return (await axios.get(urls.URL_MYORDERS, {headers: {token: token}})).data
    .data;
};

export const PostAddCart = async (payload: any, token: any) => {
  return (
    await axios.post(urls.URL_SHOPPINGCART, payload, {
      headers: {token: token},
    })
  ).data;
};

export const DeleteCart = async (itemDelete: string, token: any) => {
  return await axios.delete(urls.URL_SHOPPINGCART + '/' + itemDelete, {
    headers: {token: token},
  });
};

export const GetOrdersCart = async (token: any) => {
  return (await axios.get(urls.URL_SHOPPINGCART, {headers: {token: token}}))
    .data.data;
};
