import React from "react";
import { useParams, useNavigate } from "react-router-dom";

//Bootstrap
import Button from 'react-bootstrap/Button';


function DetailsPage(props) {
  const navigate = useNavigate();
  const params = useParams();

  const foundFood = props.foodList.find((food) => {
    return food.id == params.foodId;
  });
  return (
    foundFood ? (
      <div className="edit-wrapper">
        <div className="edit-content" style={{width:"70%"}}>
          <div id="img-wrapper" style={{ backgroundImage: `url(${foundFood.image})`,height:"400px" }}></div>
          <h2>{foundFood.name}</h2>
          <div>
            <p>calories: {foundFood.calories}</p>
            <p>servings: {foundFood.servings}</p>
          </div>
          
          <h4>Preparation</h4>
          {foundFood.calories > 400 ? <p> High in calories</p> : null}
          <p>{foundFood.how}</p>
          <Button variant="primary" onClick={() => navigate("/")}>Back</Button>
        </div>
      </div>
    ) : (
      <h3>No events found with that value</h3>
    )
  );
}

export default DetailsPage;
