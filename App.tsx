import React, {createContext, useState} from 'react';
import NavigationManager from './src/navigation';
export const TokenPrincipal = createContext({});
export const CartContext = createContext({});
export default function App() {
  const [token, setToken] = useState('');
  const [cart, setCart] = useState(0);
  return (
    <TokenPrincipal.Provider value={{token, setToken}}>
      <CartContext.Provider value={{cart, setCart}}>
        <NavigationManager />
      </CartContext.Provider>
    </TokenPrincipal.Provider>
  );
}
