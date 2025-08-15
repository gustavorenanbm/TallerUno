import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PantallaInicioSesion from '../screens/PantallaInicioSesion'; 
import PantallaRegistro from '../screens/PantallaRegistro';         
import Carrito from '../screens/Carrito';
import HomeScreen from '../screens/HomeScreen/HomeScreen';


export type  RootStackParamList = {
  PantallaInicioSesion: undefined;
  PantallaRegistro: undefined;
  Home: undefined;
  Carrito: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = ()=> {
  return (
    <Stack.Navigator initialRouteName="PantallaInicioSesion">
      <Stack.Screen name="PantallaInicioSesion" component={PantallaInicioSesion} options={{ title: 'Iniciar sesión' }}/>
      <Stack.Screen name="PantallaRegistro" component={PantallaRegistro} options={{ title: 'Crear cuenta' }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Productos' }}/>
      <Stack.Screen name="Carrito" component={Carrito} options={{ title: 'Carrito' }}/>
    </Stack.Navigator>
  );
}
export default StackNavigator;