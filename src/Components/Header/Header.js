import React from "react";
import { Fragment } from "react";
import Cart from "./HeaderCartButton";
import Image from "../../assets/choi-ben-PRM1RuIIQvI-unsplash.jpg";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header-main">
        <h2>WonderFoods</h2>
        <Cart />
      </header>
      <div className="header-image">
        <img src={Image} alt="Table Image" />
      </div>
    </Fragment>
  );
};

export default Header;
