import React from "react";
import "./MealItem.css";
const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <section className="availableMeals">
      <div className="meals">
        <div className="meal">
          <div>{props.name}</div>
          <div>{price}</div>
        </div>

        <div className="mealquantity">
          <input type="number" min="1" max="5" placeholder="1" />
          <button>Add</button>
        </div>
      </div>

      <div className="mealsDescription">{props.description}</div>
    </section>
  );
};

export default MealItems;
