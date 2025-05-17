import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const totalProductos = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const sumaProductos = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const decrementarItem = (id) => {
    const item = cart.find((prod) => prod.id === id);
    if (item.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
        )
      );
    } else {
      removeItem(id);
    }
  };

  const aumentarItem = (id, stock) => {
    const item = cart.find((prod) => prod.id === id);
    if (item.quantity < stock) {
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        totalProductos,
        sumaProductos,
        decrementarItem,
        aumentarItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;