import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';


type RegisterForm = {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  confirmarPassword: string;
};

const PantallaRegistro = () => {
  const [form, setForm] = useState<RegisterForm>({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmarPassword: ''
  });

  const changeForm = <K extends keyof RegisterForm>(property: K, value: string) => {
    setForm(prev => ({ ...prev, [property]: value }));
  };

  const handleRegistro = () => {
    
    if (
      !form.nombre.trim() ||
      !form.apellido.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmarPassword.trim()
    ) {
      Alert.alert('Campos vacíos', 'Complete todos los campos.');
      return;
    }
    
    if (form.password !== form.confirmarPassword) {
      Alert.alert('Error', 'Las contrasenias no coinciden.');
      return;
    }

    
    const { confirmarPassword, ...payload } = form;
    console.log(payload);
    Alert.alert('OK', 'Datos de Registro enviados a consola.');
  };

  return (
    <KeyboardAvoidingView
    style={{flex:1}}
    behavior={Platform.OS === "ios"? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Image
        source={require("../../assets/Imagenes/registro2.png")}
        style={styles.imagen}
      />
      <Text style={styles.titulo}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={form.nombre}
        onChangeText={(t) => changeForm('nombre', t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={form.apellido}
        onChangeText={(t) => changeForm('apellido', t)}
      />
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
        placeholder="Contraseña"
        value={form.password}
        onChangeText={(t) => changeForm('password', t)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contrasenia"
        value={form.confirmarPassword}
        onChangeText={(t) => changeForm('confirmarPassword', t)}
        secureTextEntry
      />

      <Button title="Registrarse" onPress={handleRegistro} />
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    backgroundColor: '#689B8A' 
  },
  titulo: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  input: { 
    borderWidth: 1, 
    marginBottom: 10, 
    padding: 10, 
    borderRadius: 8 
  },
  imagen: { 
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    marginBottom: 20 
  },
});

export default PantallaRegistro;
