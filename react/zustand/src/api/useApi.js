import { useEffect, useState } from "react";

export const useAPI = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);

        const data = res.data;

        if (data && data.length > 0) {
          setData(data);
        }
      } catch (error) {
        setLoading(true);
        setErrors(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return [data, loading, errors];
};

// const [data, error, loading] = useAPI();
