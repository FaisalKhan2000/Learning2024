import { createContext, useState } from "react";
import useProducts from "../hooks/useProducts";

// create context
const GlobalContext = createContext();

// provide context
const GlobalProvider = ({ children }) => {
  const [products, loading, errors] = useProducts();
  const [cart, setCart] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ products, errors, loading, cart, setCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export { GlobalContext, GlobalProvider };
