import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [all_product, setAllProduct] = useState([]);

  // Fetch products from your backend
  useEffect(() => {
    fetch("http://localhost:3001/api/products") // adjust if needed
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
        // Initialize cart with 0 quantities
        const initialCart = {};
        data.forEach((item) => (initialCart[item.id] = 0));
        setCartItems(initialCart);
      });
  }, []);

  const addToCart = (itemId) => {
    // Update cart quantity
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    // Update stock in products list
    setAllProduct((prev) =>
      prev.map((item) =>
        item.id === itemId && item.stock > 0
          ? { ...item, stock: item.stock - 1 }
          : item
      )
    );
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, item) => sum + item, 0);
  };

  const getTotalCartAmount = () => {
    return all_product.reduce((total, product) => {
      const quantity = cartItems[product.id] || 0;
      return total + product.new_price * quantity;
    }, 0);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));

    // Restore stock when removing
    setAllProduct((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, stock: item.stock + 1 } : item
      )
    );
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalCartAmount,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
