import React from "react";
import "./HeaderCartButton.css";
import { Fragment } from "react";

const Cart = (props) => {
  return (
    <div className="cart" onClick={props.onShow}>
      <div className="cartLogo">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <div className="youCart">YourCart</div>
      <div className="quantity">3</div>
    </div>
  );
};

export default Cart;
