import React from 'react';
import { View, Text, Modal, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import colors from '../../../commons/constants';

type Producto = {
  id: string;
  nombre: string;
  precio: number;
};

type Props = {
  visible: boolean;
  carrito: Producto[];
  onClose: () => void;
  onVaciar: () => void;
  onFinalizar: () => void;
};

const ModalCart = ({ visible, carrito, onClose, onVaciar, onFinalizar }: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.titulo}>Carrito de Compras</Text>

        {carrito.length === 0 ? (
          <Text style={styles.vacio}>Tu carrito está vacío</Text>
        ) : (
          <FlatList
            data={carrito}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.precio}>${item.precio.toFixed(2)}</Text>
              </View>
            )}
          />
        )}

        <View style={styles.botones}>
          <TouchableOpacity style={[styles.boton, { backgroundColor: colors.primary }]} onPress={onFinalizar}>
            <Text style={styles.textoBoton}>Finalizar Compra</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.boton, { backgroundColor: colors.danger }]} onPress={onVaciar}>
            <Text style={styles.textoBoton}>Vaciar Carrito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.boton, { backgroundColor: colors.input }]} onPress={onClose}>
            <Text style={styles.textoBoton}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  vacio: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  nombre: {
    fontSize: 16,
  },
  precio: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  botones: {
    marginTop: 20,
  },
  boton: {
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  textoBoton: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
