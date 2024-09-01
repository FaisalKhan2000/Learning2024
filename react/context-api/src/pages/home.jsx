import React from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import ProductCard from "../components/product";

const Home = () => {
  const { products, loading, errors } = useGlobalContext();

  if (loading)
    return (
      <div className="text-center mt-5">
        <h2>Loading...</h2>
      </div>
    );
  if (errors)
    return (
      <div className="text-center mt-5">
        <h2>{errors}</h2>
      </div>
    );

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
