import { createContext, useState } from "react";
import data from "../assets/data.json";

// create context
const GlobalContext = createContext();

// provide context
const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <GlobalContext.Provider value={{ data, cart, setCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
export { GlobalContext, GlobalProvider };
