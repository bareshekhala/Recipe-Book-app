import React from "react";
import List from "./List";
function ListItem({ id, name, calories, image, servings, handleDelete }) {
  return (
    <div id="card">
      <div id="img-wrapper">
        <img id="img-card" src={image} alt="foodImage"/>
      </div>

      <div id="card-info">
        <h3>{name}</h3>
        <p>calories: {calories}</p>
        <p>servings: {servings}</p>
        {calories > 400 ? <p> High in calories</p> : null}

        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

export default ListItem;
