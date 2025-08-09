import React from 'react'
import { View } from 'react-native'
import PantallaRegistro from './Componentes/PantallaRegistro'
import PantallaInicioSesion from './Componentes/PantallaInicioSesion';

const App = () => {
  return (
    <View style={{flex:1}} >
      {/* <PantallaRegistro/> */}
      <PantallaInicioSesion/>
    </View>
  );
};
export default App;