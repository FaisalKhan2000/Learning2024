import { useContext } from "react";
import { GlobalContext } from "../context/global-context";

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
