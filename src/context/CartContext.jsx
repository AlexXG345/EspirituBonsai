import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (bonsai) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === bonsai.id);
      if (exists) return prev.map(item =>
        item.id === bonsai.id ? { ...item, qty: item.qty + 1 } : item
      );
      return [...prev, { ...bonsai, qty: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);