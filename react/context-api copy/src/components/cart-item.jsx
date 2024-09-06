import React from "react";
import { Button, ListGroup, ButtonGroup } from "react-bootstrap";

const CartItem = ({ product, onAddQuantity, onReduceQuantity, onRemove }) => {
  return (
    <ListGroup.Item className="d-flex align-items-center">
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
        <p>
          <strong>Subtotal:</strong> $
          {(product.price * product.quantity).toFixed(2)}
        </p>
      </div>
      <ButtonGroup className="me-2">
        <Button
          variant="secondary"
          onClick={() => onReduceQuantity(product.id)}
        >
          -
        </Button>
        <Button variant="light" disabled>
          {product.quantity}
        </Button>
        <Button variant="secondary" onClick={() => onAddQuantity(product.id)}>
          +
        </Button>
      </ButtonGroup>
      <Button variant="danger" onClick={() => onRemove(product.id)}>
        Remove
      </Button>
    </ListGroup.Item>
  );
};

export default CartItem;
