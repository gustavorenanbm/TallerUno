import React, { createContext, useContext, useMemo, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

export type Product = { id: string; nombre: string; precio: number; imagen?: ImageSourcePropType };
export type CartLine = { product: Product; qty: number };
export type CartItem = { id: string; nombre: string; precio: number; qty: number };

type CartContextType = {
  lines: CartLine[];
  add: (product: Product, qty?: number) => void;
  inc: (productId: string) => void;
  dec: (productId: string) => void;
  remove: (productId: string) => void;
  clear: () => void;
  count: number;      // cantidad total de ítems
  subtotal: number;   // suma sin impuestos
  iva: number;        // 12% (ajústalo si tu profe pide otro)
  total: number;      // subtotal + iva
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lines, setLines] = useState<CartLine[]>([]);

  const add = (product: Product, qty = 1) => {
    setLines(prev => {
      const i = prev.findIndex(l => l.product.id === product.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...prev, { product, qty }];
    });
  };

  const inc = (id: string) =>
    setLines(prev => prev.map(l => (l.product.id === id ? { ...l, qty: l.qty + 1 } : l)));

  const dec = (id: string) =>
    setLines(prev =>
      prev.flatMap(l => {
        if (l.product.id !== id) return [l];
        const q = l.qty - 1;
        return q > 0 ? [{ ...l, qty: q }] : [];
      })
    );

  const remove = (id: string) => setLines(prev => prev.filter(l => l.product.id !== id));
  const clear = () => setLines([]);

  const { count, subtotal } = useMemo(() => {
    const count = lines.reduce((acc, l) => acc + l.qty, 0);
    const subtotal = lines.reduce((acc, l) => acc + l.qty * l.product.precio, 0);
    return { count, subtotal };
  }, [lines]);

  const iva = subtotal * 0.15; // cambia el 0.12 si necesitas otro porcentaje
  const total = subtotal + iva;

  const value: CartContextType = { lines, add, inc, dec, remove, clear, count, subtotal, iva, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
