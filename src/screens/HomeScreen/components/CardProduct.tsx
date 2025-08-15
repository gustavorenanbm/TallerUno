import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import  colors  from '../../../commons/constants';

type Props = {
  producto: { id: string; nombre: string; precio: number; imagen: ImageSourcePropType };
  onPress: () => void;
};

const CardProduct = ({ producto, onPress }: Props)=> {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source ={producto.imagen} style = {styles.imagen}/>
      <View>
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.precio}>${producto.precio}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default CardProduct;



const styles = StyleSheet.create({
  card: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderWidth: 1, 
    borderColor: colors.input, 
    borderRadius: 10,
    padding: 14, 
    marginBottom: 12, 
    backgroundColor: '#fff'
  },
  nombre: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: colors.primary 
  },
  precio: { 
    marginTop: 4, 
    fontSize: 14 
  },
  imagen:{
    width: 200,
    height: 90, 
    resizeMode:"contain",
    marginBottom: 10,
  }
});
