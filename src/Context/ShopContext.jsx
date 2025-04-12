import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [all_product, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
        const initialCart = {};
        data.forEach((item) => (initialCart[item.id] = 0));
        setCartItems(initialCart);
      });
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    setAllProduct((prev) =>
      prev.map((item) =>
        item.id === itemId && item.stock > 0
          ? { ...item, stock: item.stock - 1 }
          : item
      )
    );

    fetch("http://localhost:3001/api/update-stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: itemId, quantity: 1 }),
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));

    setAllProduct((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, stock: item.stock + 1 } : item
      )
    );

    fetch("http://localhost:3001/api/increase-stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: itemId, quantity: 1 }),
    });
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

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        setCartItems,
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
