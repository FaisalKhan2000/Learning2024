import { create } from "zustand";
import data from "../assets/data.json";

export const useStore = create((set, get) => ({
  products: data,
  cart: [],

  // Check for existing product
  existingProduct: (productName) => {
    const state = get();
    return state.cart.find((item) => item.name === productName);
  },

  // add
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  // increase quantity
  increaseQuantity: (productName) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  // decrease quantity
  decreaseQuantity: (productName) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.name === productName
      );

      if (existingProduct && existingProduct.quantity === 1) {
        return { cart: state.cart.filter((item) => item.name !== productName) };
      } else {
        return {
          cart: state.cart.map((item) =>
            item.name === productName
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
    }),

  // remove product
  removeProduct: (productName) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== productName),
    })),
}));
