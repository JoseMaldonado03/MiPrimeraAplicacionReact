import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    let productIndex = cart.findIndex((p) => p.id == item.id);

    if (productIndex < 0) {
      return setCart([...cart, { ...item, cantidad: 1 }]);
    }

    cart[productIndex].cantidad += 1;

    setCart(cart);
  };

  const removeItem = (item) => {
    let productIndex = cart.findIndex((p) => p.id == item.id);

    if (productIndex >= 0 && cart[productIndex]?.cantidad == 1) {
      const newCart = cart.filter((p) => p.id != item.id);
      return setCart(newCart);
    }

    if (productIndex >= 0 && cart[productIndex]?.cantidad > 1) {
      cart[productIndex].cantidad -= 1;
      return setCart(cart);
    }

    return alert('No hay productos añadidos en tu carrito.');
  };

  return <CartContext.Provider value={[cart, addItem, removeItem, setCart]}>{children}</CartContext.Provider>;
}
