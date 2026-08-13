import React from "react";
import { useParams } from "react-router-dom";

function DetailsPage(props) {
  const params = useParams();

  const foundFood = props.foodList.find((food) => {
    return food.id == params.foodId;
  });
  return (
    foundFood ? <div>
      <h2>details</h2>
      <h3>{foundFood.name}</h3>
      <p>calories: {foundFood.calories}</p>
      <p>servings: {foundFood.servings}</p>
      {foundFood.calories > 400 ? <p> High in calories</p> : null}
    </div> : <h3>No events found with that value</h3>
  );
}

export default DetailsPage;
