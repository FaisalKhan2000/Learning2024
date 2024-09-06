import React from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import { ListGroup, Card, Button } from "react-bootstrap";
import CartItem from "../components/cart-item";

const Cart = () => {
  const { cart, setCart } = useGlobalContext();

  const handleAddQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleReduceQuantity = (productId) => {
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

  const handleRemove = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const total = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ListGroup>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onAddQuantity={handleAddQuantity}
                onReduceQuantity={handleReduceQuantity}
                onRemove={handleRemove}
              />
            ))}
          </ListGroup>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Total: ${total.toFixed(2)}</Card.Title>
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
