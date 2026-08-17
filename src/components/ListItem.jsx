import React, { useState } from "react";
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
  // For "Are you sure functionality" a new state is defined
  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    const newFoodList = foodList.filter((food) => {
      return food.id !== id;
    });
    setFoodList(newFoodList);
    setShowModal(false);
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
        {calories > 400 ? <p>High in calories</p> : <p>Healthy</p>}
        {/*delete*/}
        <button onClick={() => setShowModal(true)}>Delete</button>

        {/*details*/}
        <Link to={`/${id}`}>Link</Link>

        {/*edit*/}
        <button>
          <Link to={`/edit/${id}`}>Edit</Link>
        </button>
      </div>

        {/*Are you sure part*/}
      {showModal && (
        <div id="modal">
          <div
            id="modalBox"
            style={{
              backgroundColor: "gold",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h3>Are You Sure?</h3>
            <button id="yes-btn" onClick={handleDelete}>Yes,Delete</button>
            <button id="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ListItem;
