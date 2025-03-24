import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import "../css/cart.css";
 
const Cart = ({ show, handleClose, cartItems = [], updateQuantity, deleteItem }) => {
  // Ensure cartItems is always an array
  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
 
  const calculateTotalPrice = () => {
    return safeCartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
 
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {safeCartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {safeCartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>Rs. {item.price.toFixed(2)}</td>
                  <td>
                    <Button size="sm" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button size="sm" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                  </td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => deleteItem(item.id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <div className="total-price">Total: Rs. {calculateTotalPrice()}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;