import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
    <>
    {/*details*/}
    <Link to={`/${id}`} className="card-link">

    <div id="card">
      <div id="img-wrapper" style={{ backgroundImage: `url(${image})` }}>
        {/* <img id="img-card" src={image} alt="foodImage" /> */}
      </div>

      <div id="card-info">
        <h3>{name}</h3>
        <p>calories: {calories}</p>
        <p>servings: {servings}</p>
        {calories > 400 ? (
          <p id="high-calories">High in calories</p>
        ) : (
          <p id="healthy">Low in calories</p>
        )}

        <div id="card-btn-wrapper">
          {/*delete*/}
          <button onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); // Blocks the <Link> from opening
            setShowModal(true)
          }}
            >Delete
            </button>

          {/*edit*/}
          <button>
            <Link to={`/edit/${id}`}>Edit</Link>
          </button>
        </div>

        
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
            <button id="yes-btn" onClick={handleDelete}>
              Yes,Delete
            </button>
            <button id="cancel-btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    </Link>
    </>
  );
}
export default ListItem;
