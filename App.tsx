import React from 'react'
import { View } from 'react-native'
import PantallaRegistro from './src/screens/PantallaRegistro'
import PantallaInicioSesion from './src/screens/PantallaInicioSesion';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import { CartProvider } from './src/context/CartContext';



const App = () => {
  return (
    <CartProvider>
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    </CartProvider>
  );
};
export default App;