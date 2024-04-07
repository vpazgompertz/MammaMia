import React, { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState([]);
  const [cart, setCart] = useState([]);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    }
  };

  const addPizzaCart = (pizzaItem) => {
    setCart((prevCart) => [...prevCart, { ...pizzaItem, quantity: 1 }]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./pizzas.json");
        const data = await response.json();
        setPizzaData(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PizzaContext.Provider
      value={{ pizzaData, addPizzaCart, cart, updateQuantity }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
