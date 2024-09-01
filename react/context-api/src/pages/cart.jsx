import React from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import { Button, ListGroup, Card } from "react-bootstrap";

const Cart = () => {
  const { cart, setCart } = useGlobalContext();

  const handleRemove = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ListGroup>
            {cart.map((product) => (
              <ListGroup.Item
                key={product.id}
                className="d-flex align-items-center"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="img-thumbnail"
                  style={{
                    width: "100px",
                    height: "auto",
                    marginRight: "1rem",
                  }}
                />
                <div className="me-auto">
                  <h5>{product.title}</h5>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                </div>
                <Button
                  variant="danger"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>
                Total: $
                {cart
                  .reduce((total, product) => total + product.price, 0)
                  .toFixed(2)}
              </Card.Title>
              <Button variant="primary" className="me-2">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cart;
