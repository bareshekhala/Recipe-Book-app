import React from "react";
import { useParams, useNavigate } from "react-router-dom";


function DetailsPage(props) {
  const navigate = useNavigate();
  const params = useParams();

  const foundFood = props.foodList.find((food) => {
    return food.id == params.foodId;
  });
  return (
    foundFood ? <div>
      <h2>Preparation</h2>
      <h3>{foundFood.name}</h3>
      <p>calories: {foundFood.calories}</p>
      <p>servings: {foundFood.servings}</p>
      {foundFood.calories > 400 ? <p> High in calories</p> : null}
            <p>{foundFood.how}</p>
            <button onClick={()=>navigate("/")}>Back</button>

    </div> : <h3>No events found with that value</h3>
  );
}

export default DetailsPage;
