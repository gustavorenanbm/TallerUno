import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const PantallaInicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInicioSesion = () => {
    // Aquí lógica para validar e iniciar sesión
    console.log('Iniciando sesión con:', { email });
  };

  return (
    <View style={styles.container}>
        <Image
        source={require("../Componentes/Imagenes/Carrito.png")}
        style={styles.imagen}
        />
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Ingresar" onPress={handleInicioSesion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor:"black"
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color:"white"
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor:"white"
  },
  imagen:{
    width:150,
    height:150,
    alignSelf:"center",
    marginBottom:20,
  }
});

export default PantallaInicioSesion;
