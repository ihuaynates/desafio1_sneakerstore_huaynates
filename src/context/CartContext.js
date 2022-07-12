import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id);

    setCart(cartWithoutProduct);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const getCartQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  const getCartTotal = () => {
    let totalCart = 0;

    cart.forEach((prod) => {
      totalCart += prod.quantity * prod.price;
    });

    return totalCart;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        isInCart,
        getCartQuantity,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
