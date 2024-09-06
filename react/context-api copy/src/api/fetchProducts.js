import axios from "axios";

export const fetchProducts = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "https://dummyjson.com/products",
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
