import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const ProductCard = ({
  product,
  onAddToCart,
  onRemoveFromCart,
  productInCart,
}) => {
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

        {/* Add or update the quantity in the cart */}
        {productInCart ? (
          <ButtonGroup>
            <Button
              variant="secondary"
              onClick={() => onRemoveFromCart(product.id)}
            >
              -
            </Button>
            <Button variant="light" disabled>
              {productInCart.quantity}
            </Button>
            <Button variant="secondary" onClick={() => onAddToCart(product.id)}>
              +
            </Button>
          </ButtonGroup>
        ) : (
          <Button variant="primary" onClick={() => onAddToCart(product.id)}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
