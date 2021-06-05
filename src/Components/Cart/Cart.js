import React, { useState } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[
        {
          id: "1",
          name: "Sishaa",
          description: "rice pudding",
          price: "23.09",
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Amount</span>
        <span>39.05</span>
      </div>
      <div className="actions">
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
