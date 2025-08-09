import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, Pressable } from 'react-native';

type LoginForm = {
  email: string;
  password: string;
};

const PantallaInicioSesion = () => {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
  const [mostrarPass, setMostrarPass] = useState(false);

  const changeForm = <K extends keyof LoginForm>(property: K, value: string) => {
    setForm(prev => ({ ...prev, [property]: value }));
  };

  const handleInicioSesion = () => {
    
    if (!form.email.trim() || !form.password.trim()) {
      Alert.alert('Campos vacíos', 'Complete correo y contrasenia.');
      return;
    }
    
    console.log({ ...form });
    Alert.alert('OK', 'Datos de Login enviados a consola.');
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
        value={form.email}
        onChangeText={(t) => changeForm('email', t)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contrasenia"
        value={form.password}
        onChangeText={(t) => changeForm('password', t)}
        secureTextEntry={!mostrarPass}
      />

      <Pressable onPress={() => setMostrarPass(s => !s)}>
        <Text style={styles.toggle}>{mostrarPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}</Text>
      </Pressable>

      <Button title="Ingresar" onPress={handleInicioSesion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    backgroundColor: 'black' 
  },
  titulo: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center', 
    color: 'white' },
  input: { 
    borderWidth: 1, 
    marginBottom: 10, 
    padding: 10, 
    borderRadius: 8, 
    backgroundColor: 'white' 
  },
  imagen: { 
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    marginBottom: 20 
  },
  toggle: { 
    color: '#4da3ff', 
    textAlign: 'right', 
    marginBottom: 10 
  }
});

export default PantallaInicioSesion;
