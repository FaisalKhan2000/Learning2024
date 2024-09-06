import React from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import ProductCard from "../components/product-item";

const Home = () => {
  const { products, cart, setCart, loading, errors } = useGlobalContext();

  const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (errors) {
    return (
      <div className="text-center mt-5">
        <h2>{errors}</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => {
          const productInCart = cart.find((item) => item.id === product.id);
          return (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard
                product={product}
                productInCart={productInCart}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
