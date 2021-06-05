import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [showModal, setShowModal] = useState(false);

  const onShowhandler = () => {
    setShowModal(true);
  };

  const onHideHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      {showModal && <Cart onClose={onHideHandler} />}

      <Header onShow={onShowhandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
