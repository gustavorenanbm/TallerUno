import React, { useLayoutEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardProduct from './components/CardProduct';
import ModalProduct from '../HomeScreen/components/ModalProduct';
import BodyComponent from '../../components/BodyComponent';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigator/StackNavigator'; // o '../../../App'
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../context/CartContext';


const DATA = [
  { id: '1', nombre: 'Auriculares', precio: 25.5, imagen: require('../../../assets/Imagenes/audifonos.png')},
  { id: '2', nombre: 'Teclado', precio: 39.9, imagen: require('../../../assets/Imagenes/teclado.png') },
  { id: '3', nombre: 'telefono', precio: 400, imagen: require('../../../assets/Imagenes/telefono.png') },
  { id: '4', nombre: 'laptop', precio: 750.5, imagen: require('../../../assets/Imagenes/Laptop.png') },
  { id: '5', nombre: 'tablet', precio: 245.5, imagen: require('../../../assets/Imagenes/tablet.png') },
  { id: '6', nombre: 'camara', precio: 500.8, imagen: require('../../../assets/Imagenes/Camara.png') },
  { id: '7', nombre: 'reloj', precio: 100.45, imagen: require('../../../assets/Imagenes/reloj.png') },
  { id: '8', nombre: 'tv', precio: 500.75, imagen: require('../../../assets/Imagenes/tv.png') },

];

type CartItem = { id: string; nombre: string; precio: number; qty:number };

const HomeScreen = () => {
  const [sel, setSel] = useState<typeof DATA[0] | null>(null);
  
  

  const { 
    lines, 
    add, 
    clear, 
    count, 
    total: cartTotal, 
    subtotal:cartSubtotal,
  } = useCart();


  const handleAddToCart = (p: (typeof DATA)[number], qty: number) => {
  add(p, qty);
  setSel(null);
};
  

const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
  nav.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => nav.navigate('Carrito')} style={{ paddingHorizontal: 12 }}>
        <Text>🛒 {count}</Text>
      </TouchableOpacity>
    ),
    title: 'Productos',
  });
}, [nav, count]);



  return (
    <BodyComponent>
        <FlatList
        data={DATA}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <CardProduct producto={item} onPress={() => setSel(item)} />
        )}
      />
      <ModalProduct 
      visible={!!sel} 
      producto={sel} 
      onClose={() => setSel(null)} 
      onAdd= {handleAddToCart}
      />
      
        </BodyComponent>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({  
  cartPanel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#fff',
    padding: 16,
    elevation: 16, // Android sombra
    shadowColor: '#000', // iOS sombra
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
  },
  cartPanelHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  cartPanelTitle: { 
    fontSize: 18, 
    fontWeight: '700' 
  },
  cartClose: { 
    fontSize: 18 
  },

  cartEmpty: { 
    marginTop: 12, 
    color: '#555' 
  },

  cartItems: { 
    marginTop: 12, 
    maxHeight: 220 
  },
  cartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  cartName: { 
    fontSize: 14 
  },
  cartPrice: { 
    fontSize: 14, 
    fontWeight: '600' 
  },

  cartFooter: { 
    marginTop: 12 
  },
  total: { 
    fontSize: 16, 
    fontWeight: '700', 
    marginBottom: 12 
  },

  cartActions: { 
    flexDirection: 'row', 
    gap: 10 
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnPrimary: { 
    backgroundColor: '#2e7d32' 
  },
  btnOutline: { 
    borderWidth: 1, 
    borderColor: '#999' 
  },
  btnText: { 
    color: '#fff', 
    fontWeight: '700' 
  },
  btnOutlineText: { 
    color: '#333' 
  },
});