import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h3>{meal.strMeal}</h3>
      <h4>{meal.strArea}</h4>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
