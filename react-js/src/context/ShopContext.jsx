import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  setOrderId: () => {},
  setError: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const newItem = { ...item, quantity: quantity };
      setCart((prev) => [...prev, newItem]);
      setTotalQuantity((prevTotal) => prevTotal + quantity);
      setTotal((prevTotal) => prevTotal + newItem.price * quantity);
    } else {
      setCart((prev) =>
        prev.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
      setTotalQuantity((prevTotal) => prevTotal + quantity);
      setTotal((prevTotal) => prevTotal + item.price * quantity);
    }
  };

  const removeItem = (itemId, quantity, price) => {
    const cartUpdated = cart.map((prod) =>
      prod.id === itemId
        ? { ...prod, quantity: prod.quantity - quantity }
        : prod
    );
    setCart(cartUpdated.filter((prod) => prod.quantity > 0));
    setTotalQuantity((prevTotal) => prevTotal - quantity);
    setTotal((prevTotal) => prevTotal - price * quantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const updateOrderId = (id) => {
    setOrderId(id);
  };

  const updateError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        total,
        addItem,
        removeItem,
        clearCart,
        setOrderId,
        setError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
