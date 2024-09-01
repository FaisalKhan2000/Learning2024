import React from "react";
import { Card, Button } from "react-bootstrap"; // Import Bootstrap components
import { useGlobalContext } from "../context/useGlobalContext";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useGlobalContext();

  const handleCart = () => {
    // checking if product already exist
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      alert("Product is already in the cart!");
    } else {
      setCart([...cart, product]);
      alert("Product added to cart!");
    }
  };
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {product.rating}
        </Card.Text>
        <Button variant="primary" onClick={handleCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
