import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import colors from '../commons/constants';
import { useCart } from '../context/CartContext';

export default function Carrito() {
  const { lines, inc, dec, remove, clear, subtotal, iva, total } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

      <View style={styles.headerRow}>
        <Text style={[styles.cell, { flex: 2, fontWeight: '700' }]}>Producto</Text>
        <Text style={[styles.cell, styles.center, { width: 70, fontWeight: '700' }]}>Unit.</Text>
        <Text style={[styles.cell, styles.center, { width: 60, fontWeight: '700' }]}>Cant.</Text>
        <Text style={[styles.cell, styles.center, { width: 90, fontWeight: '700' }]}>Total</Text>
      </View>

      <FlatList
        data={lines}
        keyExtractor={(it) => it.product.id}
        ListEmptyComponent={<Text style={{ marginTop: 12 }}>Tu carrito está vacío</Text>}
        renderItem={({ item }) => {
          const lineTotal = item.product.precio * item.qty;
          return (
            <View style={styles.row}>
              <Text style={[styles.cell, { flex: 2 }]} numberOfLines={1}>{item.product.nombre}</Text>
              <Text style={[styles.cell, styles.center, { width: 70 }]}>${item.product.precio.toFixed(2)}</Text>

              <View style={styles.qtyBox}>
                <TouchableOpacity style={styles.btnSq} onPress={() => dec(item.product.id)}>
                  <Text style={styles.btnSqTxt}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qtyTxt}>{item.qty}</Text>
                <TouchableOpacity style={styles.btnSq} onPress={() => inc(item.product.id)}>
                  <Text style={styles.btnSqTxt}>＋</Text>
                </TouchableOpacity>
              </View>

              <Text style={[styles.cell, styles.center, { width: 90 }]}>${lineTotal.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => remove(item.product.id)} style={styles.remove}>
                <Text>✕</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <View style={styles.totales}>
        <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text>IVA (12%): ${iva.toFixed(2)}</Text>
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.btn, styles.btnOutline]} onPress={clear}>
          <Text style={[styles.btnTxt, styles.btnOutlineTxt]}>Vaciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={clear}>
          <Text style={styles.btnTxt}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.secondary, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: colors.primary, marginBottom: 12 },
  headerRow: { flexDirection: 'row', paddingBottom: 6, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#999' },
  row: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
    borderRadius: 10, paddingVertical: 10, paddingHorizontal: 8, marginTop: 8
  },
  cell: { 
    fontSize: 14 
  },
  center: { 
    textAlign: 'center' 
  },
  qtyBox: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 60 
  },
  btnSq: { 
    width: 26, 
    height: 26, 
    borderRadius: 6, 
    borderWidth: 1, 
    borderColor: '#bbb', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  btnSqTxt: { 
    fontSize: 16, 
    lineHeight: 18 
  },
  qtyTxt: { 
    width: 26, 
    textAlign: 'center' 
  },
  remove: { 
    marginLeft: 8 
  },
  totales: { 
    marginTop: 12, 
    gap: 4 
  },
  total: { 
    marginTop: 4, 
    fontWeight: '700' 
  },
  actions: { flexDirection: 'row', 
    gap: 10, 
    marginTop: 14 
  },
  btn: { flex: 1, 
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  btnPrimary: { 
    backgroundColor: '#2e7d32' 
  },
  btnOutline: { 
    borderWidth: 1, 
    borderColor: '#999' 
  },
  btnTxt: { 
    color: '#fff', 
    fontWeight: '700' },
  btnOutlineTxt: { 
    color: '#333' 
  },
});
