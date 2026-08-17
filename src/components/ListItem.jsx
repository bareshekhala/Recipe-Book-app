import React from "react";
import { Link } from "react-router-dom";

function ListItem({
  id,
  name,
  calories,
  image,
  servings,
  foodList,
  setFoodList,
}) {
  function handleDelete(id) {
    const newFoodList = foodList.filter((food) => {
      return food.id !== id;
    });
    setFoodList(newFoodList);
  }

  return (
    <div id="card">
      <div id="img-wrapper">
        <img id="img-card" src={image} alt="foodImage" />
      </div>

      <div id="card-info">
        <h3>{name}</h3>
        <p>calories: {calories}</p>
        <p>servings: {servings}</p>
        {calories > 400 ? <p> High in calories</p> : null}

        <button onClick={() => handleDelete(id)}>Delete</button>
        <Link to={`/${id}`}>Link</Link>
        <button>
          <Link to={`/edit/${id}`}>Edit</Link>
        </button>
      </div>
    </div>
  );
}
export default ListItem;
