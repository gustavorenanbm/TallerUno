// src/screens/HomeScreen/components/ModalProduct.tsx
import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from "react-native";
import colors from "../../../commons/constants";

type Producto = {
  id: string;
  nombre: string;
  precio: number;
  imagen: ImageSourcePropType; 
};

type Props = {
  visible: boolean;
  producto: Producto | null;
  onClose: () => void;
  onAdd: (p: Producto, qty: number) => void;   
};

const ModalProduct = ({ visible, producto, onClose, onAdd }: Props) => {
  const [qty, setQty]= useState(1);
  if (!producto) return null;

  const inc = () => setQty (q =>Math.min (q + 1, 99));
  const dec  = () => setQty (q =>Math.max (q - 1, 1));

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>

          <Image source={producto.imagen} style={styles.imagen} />

          <Text style={styles.title}>{producto.nombre}</Text>
          <Text style={styles.price}>${producto.precio.toFixed(2)}</Text>

          <View style={styles.qtyRow}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => setQty((q) => Math.max(q - 1, 1))}
            >
              <Text style={styles.qtyTxt}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNum}>{qty}</Text>

            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => setQty((q) => Math.min(q + 1, 99))}
            >
              <Text style={styles.qtyTxt}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => onAdd(producto, qty)} style={[styles.button, { backgroundColor: "#2e7d32" }]}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={[styles.button, { backgroundColor: colors.primary }]}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalProduct;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  content: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  imagen: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 6, color: colors.primary, textAlign: "center" },
  price: { fontSize: 16, marginBottom: 16 },
  button: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" 

  },
  qtyRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 12,
    borderWidth:1, 
    borderColor: "#ccc",
    paddingHorizontal:8,
    height:48,
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyTxt: { 
    fontSize: 20, 
    fontWeight: "bold",
    color: "#000",
  },
  qtyNum: { 
    width: 50, 
    textAlign: "center", 
    fontSize: 18, 
    fontWeight: "600", 
    color: "#000",
    marginHorizontal: 6,
  },

});
