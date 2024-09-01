import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        if (data && Array.isArray(data.products)) {
          // Access the products array
          setProducts(data.products);
        } else {
          setErrors("No products found.");
        }
      } catch (error) {
        setErrors(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return [products, loading, errors];
};

export default useProducts;
